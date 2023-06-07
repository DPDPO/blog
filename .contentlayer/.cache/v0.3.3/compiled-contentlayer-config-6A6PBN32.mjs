// contentlayer.config.ts
import { defineDocumentType, makeSource } from "@contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
var options = {
  theme: "one-dark-pro"
};
var Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true },
    description: { type: "string", required: true }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    // remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, options]]
  }
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-6A6PBN32.mjs.map
