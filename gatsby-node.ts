// Snippet to use in the gatsby-node.ts file for a Gatsby project.
// This snippet will generate redirects from a redirects.json file.
import type { GatsbyNode } from "gatsby"
import redirects from "./data/redirects.json"

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
  reporter,
}) => {
  const { createRedirect, createPage } = actions

  interface Redirect {
    toPath: string
    isPermanent: boolean
  }

  // Generate redirects from the redirects file.
  Object.entries(redirects).forEach(([key, value]: [string, Redirect]) => {
    createRedirect({
      fromPath: key,
      toPath: value.toPath,
      isPermanent: value.isPermanent,
    })
  })
}