# gatsby-redirects-csv2json

I was working on a Gatsby website (Decoupled Drupal) which was migrated from an older Gatsby site and needed to setup over 1000 redirects. This repo contains a collection of tools to help with this need.

## gatsby-node.ts

This file contains example code to be used in a full Gatsby projects's gatsby-node file. It consumes a redirects.json file in the project's root and creates redirects for Gatsby Cloud.

## Sample Data Files

These files can be found in the `data` folder:

### www-redirects.csv

```
fromPath,toPath,isPermanent
/path1,https://example.com/path-new1,TRUE
/path2,https://example.com/path-new2,FALSE
```

### redirects.json

```
{
  "/path1": {
    "toPath": "https://example.com/path-new1",
    "isPermanent": true
  },
  "/path2": {
    "toPath": "https://example.com/path-new2",
    "isPermanent": false
  }
}
```

## Installation and Usage

To convert a redirects CSV file to the necessary JSON file, ensure the CSV file is formatted like the sample above.

Run the following commands:

`node install`

`./node csv2json.js`

Note: You can alter the paths for the source CSV and JSON files in the `csv2json.js` code.
