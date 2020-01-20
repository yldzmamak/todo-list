import React, { Component } from 'react';

import { BaseLayout } from '../container';

const withLayout = OriginalComponent =>
  class extends Component {
    render() {
      return (
        <BaseLayout>
          <OriginalComponent {...this.props} />
        </BaseLayout>
      );
    }
  };

export default withLayout;
