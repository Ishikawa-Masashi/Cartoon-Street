/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  main: [
    {
      type: "category",
      label: "Lab",
      link: {
        type: "generated-index",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "lab",
        },
      ],
    },
    {
      type: "category",
      label: "Note",
      link: {
        type: "generated-index",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "note",
        },
      ],
    },
    {
      type: "category",
      label: "Software",
      link: {
        type: "generated-index",
      },
      items: [
        "software/software_mebiusbox",
        "software/software_file_hammer",
        "software/software_disk_catalog_manager",
        "software/software_pack_assistant",
        "software/software_comic_picker",
        {
          type: "link",
          label: "TagLibUtil",
          href: "https://github.com/mebiusbox/apps/releases/tag/first",
        },
      ],
    },
    {
      type: "category",
      label: "Cartoon",
      link: {
        type: "generated-index",
      },
      items: [
        // "cartoon/ザ・シンプソンズ",
        {
          type: "category",
          label: "ザ・シンプソンズ",
          // collapsed: false,
          items: ["cartoon/ザ・シンプソンズ/シーズン1"],
        },
      ],
    },
  ],
};

module.exports = sidebars;
