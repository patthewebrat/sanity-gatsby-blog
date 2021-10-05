export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "615c5a7f352dc00fbe9be88f",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-ji6df2ck",
                  apiId: "3aef17e6-3e89-4c59-a56a-32c21e4f1b97",
                },
                {
                  buildHookId: "615c5a7ff2e86f10dfa604a0",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-93e84rwo",
                  apiId: "5005e92a-e9c0-4a90-a1aa-6dea2c54b4c8",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/patthewebrat/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-93e84rwo.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
