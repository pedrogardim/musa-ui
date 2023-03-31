import '../src/index.css';

const customViewports = {
  mobile: {
    name: 'Mobile | 320px',
    styles: {
      width: '320px',
      height: '812px'
    }
  },
  tablet: {
    name: 'Tablet | 768px',
    styles: {
      width: '768px',
      height: '1024px'
    }
  },
  desktop: {
    name: 'Desktop | 1340px',
    styles: {
      width: '1340px',
      height: '900px'
    }
  }
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: { viewports: customViewports },
  options: {
    storySort: {
      order: [
        'Introduction',
        'Foundation',
        'UI Kit',
        'PLP',
        'PDP',
        'Cart',
        'Checkout'
      ]
    }
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  backgrounds: {
    default: 'Light',
    values: [
      {
        name: 'White',
        value: '#ffffff'
      },
      {
        name: 'Snow',
        value: '#F3F4F9'
      },
      {
        name: 'Silver',
        value: '#CCCCCC'
      },
      {
        name: 'Corporative-02',
        value: '#000000 '
      }
    ]
  }
};
