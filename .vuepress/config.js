module.exports = {
    title: 'Vtex Fulfillment',
    description: 'Vtex Fulfillment',
    themeConfig: {
      nav: [
        {text: 'Picking & packing', link: '/picking-packing/'},
        {text: 'Picking mobile', link: '/picking-mobile/'},
        {text: 'Tracking', link: '/tracking/'},
        {text: 'Support', link: '/support/'},
        {text: 'Insights', link: '/insights/'},
        {text: 'Settings', link: '/settings/'},
        {text: 'Users', link: '/users/'},
        {text: 'About', link: '/about/'},
      ],
      sidebar:{
        '/picking-packing/': [''],
        '/picking-mobile/': [''],
        '/tracking/': [''],
        '/support/': [''],
        '/insights/': [''],
        '/settings/': [''],
        '/users/': [''],
        '/about/': [''],
      }
    }
  }