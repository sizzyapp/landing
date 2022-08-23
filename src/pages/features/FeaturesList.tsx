import BadassTitle, { Highlight } from "components/BadassTitle";
import MagicGrid from "components/MagicGrid";
import { Subtitle } from "components/Subtitle";
import Feature, { FeatureLayout } from "pages/features/Feature";
import { FeatureGroup } from "pages/features/FeatureGroup";
import React from "react";
import { Vertical } from "styles/layout-components";

const FeaturesList = () => {
  return (
    <Vertical fullW spacing={200}>
      <FeatureGroup
        id="responsive"
        slugs={[
          "sync-forms",
          "sync-clicks",
          "scroll-to-selector",
          "responsive-mode",
          "page-navigator",
        ]}
        title={
          <>
            The <Highlight>best</Highlight> way for dealing with responsive
            design
          </>
        }
        subtitle="Toggling settings back and forth can get annoying so we allow you to test multiple scenarios at once"
      />
      <FeatureGroup
        id="views"
        slugs={[
          "float-mode",
          "focus-mode",
          "resizable-mode",
          "full-mode",
          "zen-mode",
        ]}
        title={
          <>
            Choose the <Highlight>view</Highlight> that works for you
          </>
        }
        subtitle="Whatever view you prefer"
      />
      <FeatureGroup
        id="css"
        slugs={[
          "console-log-css",
          "css-overrides",
          "debug-styles",
          "grid-overlay",
          "styles-inspector",
        ]}
        title={
          <>
            The <Highlight>best</Highlight> tool for dealing with CSS
          </>
        }
        subtitle="We know that CSS equals pain equals leeches so that's why we have all of these features"
      />
      <FeatureGroup
        id="simulations"
        slugs={[
          "color-scheme",
          "ab-testing",
          "device-simulation",
          "language-simulation",
          "network-simulation",
          "software-keyboard-simulation",
        ]}
        title={
          <>
            Simulate <Highlight>all</Highlight> the things in parallel
          </>
        }
        subtitle="Toggling settings back and forth can get annoying so we allow you to test multiple scenarios at once"
      />
      <FeatureGroup
        id="screenshots"
        slugs={[
          "screenshots",
          "photo-studio",
          "recordings",
          "full-page-screenshots",
        ]}
        title={
          <>
            The <Highlight>best</Highlight> possible ways to screenshot
          </>
        }
        subtitle="Taking a screenshot, full page screenshot, a video, a gif"
      />

      <Vertical id="content" fullW spacing="xl">
        <Vertical center spacing="md">
          <BadassTitle maxWidth="auto">
            Everything you <Highlight>need</Highlight> for your project, right
            there
          </BadassTitle>
          <Subtitle>No need to switch between apps</Subtitle>
        </Vertical>

        <MagicGrid width={400} gap={40}>
          {["notes", "bookmarks", "tasks", "snippets"].map((s) => (
            <Feature layout={FeatureLayout.Vertical} key={s} findBySlug={s} />
          ))}
        </MagicGrid>
      </Vertical>
    </Vertical>
  );
};

export default FeaturesList;
