export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ee1b37998f94ee599ba10dd',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-y2swkeqq',
                  apiId: '66569e26-ae01-4396-ba8f-ad78a3e8bc20'
                },
                {
                  buildHookId: '5ee1b37a034dc7f33d55351b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-e7u318o5',
                  apiId: '121ac28e-9b7e-41a9-b63f-8a2f2a8743e6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gdabu/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-e7u318o5.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
