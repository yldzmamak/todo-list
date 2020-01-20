import { todosAction, inProgressAction, doneAction } from '../../redux/modules';
import ConstIcon from '../../constants/IconType';

export const homePageData = [
  {
    title: 'Yapılacak',
    getItemsFromStore: ({ todos }) => todos.todos,
    dispatchAddItemToStore: todo => todosAction.addTodo(todo),
    moveToFirstComponent: {
      dispatchAddItemToStore: inProgress => inProgressAction.addInProgress(inProgress),
      dispatchDeleteItemToStore: todo => todosAction.deleteTodo(todo),
    },
    moveToSecondComponent: {
      dispatchAddItemToStore: done => doneAction.addDone(done),
      dispatchDeleteItemToStore: todo => todosAction.deleteTodo(todo),
    },
    dropDownItems: ['Yapılıyor', 'Yapıldı'],
  },
  {
    title: 'Yapılıyor',
    getItemsFromStore: ({ inProgress }) => inProgress.inProgress,
    dispatchAddItemToStore: inProgress => inProgressAction.addInProgress(inProgress),
    moveToFirstComponent: {
      dispatchAddItemToStore: todo => todosAction.addTodo(todo),
      dispatchDeleteItemToStore: inProgress => inProgressAction.deleteInProgress(inProgress),
    },
    moveToSecondComponent: {
      dispatchAddItemToStore: done => doneAction.addDone(done),
      dispatchDeleteItemToStore: inProgress => inProgressAction.deleteInProgress(inProgress),
    },
    dropDownItems: ['Yapılacak', 'Yapıldı'],
  },
  {
    title: 'Yapıldı',
    getItemsFromStore: ({ dones }) => dones.dones,
    dispatchAddItemToStore: done => doneAction.addDone(done),
    moveToFirstComponent: {
      dispatchAddItemToStore: todo => todosAction.addTodo(todo),
      dispatchDeleteItemToStore: done => doneAction.deleteDone(done),
    },
    moveToSecondComponent: {
      dispatchAddItemToStore: inProgress => inProgressAction.addInProgress(inProgress),
      dispatchDeleteItemToStore: done => doneAction.deleteDone(done),
    },
    dropDownItems: ['Yapılacak', 'Yapılıyor'],
  },
];
