export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e336804e9be202b58746870',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-exwejkis',
                  apiId: '882456aa-4455-471f-92ff-f060dcfc8b5d'
                },
                {
                  buildHookId: '5e336804e461b6a24e8bd938',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ig7qag2s',
                  apiId: '81049878-acc3-425f-98b4-c342dd7bee0d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/benorgan/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ig7qag2s.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
