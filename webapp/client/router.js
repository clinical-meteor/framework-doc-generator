Router.configure({
  layoutTemplate: 'appLayout',
  yieldTemplates: {
    'navbarHeader': {
      to: 'header'
    },
    'navbarFooter': {
      to: 'footer'
    },
    'sidebar': {
      to: 'westPanel'
    },
    'reactiveOverlaysTemplate': {
      to: 'overlays'
    }
  }
});

Router.route('/', {
  name: 'homeRoute',
  template: 'docs',
  yieldTemplates: {
    'navbarHeader': {
      to: 'header'
    },
    'navbarFooter': {
      to: 'footer'
    },
    'sidebar': {
      to: 'westPanel'
    },
    'reactiveOverlaysTemplate': {
      to: 'overlays'
    },
    'keybindingsModal': {
      to: 'keybindingsModal'
    }
  }
});
