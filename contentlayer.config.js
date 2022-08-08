import { defineDocumentType, makeSource } from "contentlayer/source-files";
import slugify from "slugify";

export const TeamMember = defineDocumentType(() => ({
  name: "TeamMember",
  filePathPattern: "team-members/*.mdx",
  fields: {
    name: {
      type: "string",
      description: "Name of the person",
      required: true,
    },
    roles: {
      type: "list",
      of: { type: "string" },
      description: "Role",
      required: true,
    },
    description: {
      type: "string",
      description: "A short intro",
      required: true,
    },
    country: {
      type: "string",
      description: "Avatar",
      required: true,
    },
    image: {
      type: "string",
      description: "Avatar",
      required: true,
    },
  },
}));

export const UseCase = defineDocumentType(() => ({
  name: "UseCase",
  filePathPattern: `use-cases/*.mdx`,
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    slug: {
      type: "string",
      description: "The slug of the post",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the post",
      required: false,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/use-cases/${post.slug}`,
    },
  },
}));

export const Job = defineDocumentType(() => ({
  name: "Job",
  filePathPattern: `jobs/*.mdx`,
  fields: {
    title: {
      type: "string",
      description: "The title of the job",
      required: true,
    },
    slug: {
      type: "string",
      description: "The slug of the job",
      required: true,
    },
    jobtype: {
      type: "string",
      description: "The type of the job",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the job",
      required: false,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (job) => `/jobs/${job.slug}`,
    },
  },
}));

export const Testimonial = defineDocumentType(() => ({
  name: "Testimonial",
  filePathPattern: `testimonials/*.mdx`,
  fields: {
    content: {
      type: "string",
      required: true,
    },
    slug: {
      type: "string",
      required: false,
    },
    author: {
      type: "string",
      required: true,
    },
  },
}));

export const Benefit = defineDocumentType(() => ({
  name: "Benefit",
  filePathPattern: `benefits/*.mdx`,
  fields: {
    title: {
      type: "string",
      required: false,
    },
    testimonial: {
      type: "string",
      description: "The testimonial slug",
      required: false,
    },
    image: {
      type: "string",
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (benefit) => benefit._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
}));

export const Feature = defineDocumentType(() => ({
  name: "Feature",
  filePathPattern: `features/*.mdx`,
  fields: {
    title: {
      type: "string",
      description: "The title of the feature",
      required: true,
    },
    layout: {
      type: "string",
      required: false,
    },
    slug: {
      type: "string",
      description: "The slug of the feature",
      required: false,
    },
    image: {
      type: "string",
      description: "The image",
      required: false,
    },
    video: {
      type: "string",
      description: "The video",
      required: false,
    },
    description: {
      type: "string",
      description: "The description of the feature",
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (feature) => feature.slug || slugify(feature.title),
    },
    url: {
      type: "string",
      resolve: (feature) => {
        const slug = feature.slug || slugify(feature.title);
        return `/features/${slug}`;
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [UseCase, Job, Feature, Testimonial, Benefit, TeamMember],
});
