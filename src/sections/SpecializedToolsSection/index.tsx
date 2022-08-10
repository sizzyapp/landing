import { Badge, Card, Text } from "@mantine/core";
import BadassTitle from "components/BadassTitle";
import MagicGrid from "components/MagicGrid";
import React, { memo } from "react";
import { Horizontal, Vertical } from "styles/layout-components";
import {
  FcAutomotive,
  FcCamera,
  FcClapperboard,
  FcFactory,
  FcGallery,
  FcGlobe,
  FcMusic,
  FcSteam,
  FcVideoCall,
} from "react-icons/fc";

const SpecializedTools = () => {
  const professions = [
    {
      title: "Video editors",
      icon: FcVideoCall,
      tools: [{ title: "Adobe Premiere" }, { title: "Descript" }],
    },
    {
      title: "Game Developers",
      icon: FcSteam,
      tools: [{ title: "Unreal Studio" }, { title: "Unity Pro" }],
    },
    {
      title: "3D modelers",
      icon: FcFactory,
      tools: [
        { title: "Blender" },
        // { title: "SolidWorks" },
        { title: "Fusion 360" },
      ],
    },
    {
      icon: FcMusic,
      title: "Music producers",
      tools: [{ title: "GarageBand" }, { title: "Logic Pro" }],
    },
    {
      icon: FcGallery,
      title: "Designers",
      tools: [{ title: "Figma" }, { title: "Sketch" }],
    },
    {
      title: "Photographers",
      icon: FcCamera,
      tools: [{ title: "Lightroom" }, { title: "Photoshop" }],
    },
    {
      icon: FcAutomotive,
      title: "Animators",
      tools: [{ title: "3Ds Max" }, { title: "After Effects" }],
    },
    {
      icon: FcClapperboard,
      title: "VFX artists",
      tools: [{ title: "Blender" }, { title: "3Ds Max" }],
    },
    {
      icon: FcGlobe,
      title: "Web Developers",
      tools: [{ title: "???????" }, { title: "???????" }],
    },
  ];
  return (
    <Vertical sx={{ maxWidth: 900, margin: "auto" }} spacing="xl" center fullW>
      <BadassTitle>
        Why does every professional get a specialized tool, but not web
        developers?
      </BadassTitle>

      <MagicGrid width={250}>
        {professions.map((p) => (
          <Card withBorder shadow="sm">
            <Vertical center>
              {p.icon && <p.icon size={40} />}
              <Text
                size="xl"
                sx={(t) => ({ color: t.colors.gray[7] })}
                weight="bold"
              >
                {p.title}
              </Text>
              <Horizontal spacing="xs">
                {p.tools.map((t) => {
                  return (
                    <Badge
                      size="lg"
                      color="purple"
                      // sx={(t) => ({ color: t.colors.gray[7] })}
                    >
                      {t.title}
                    </Badge>
                  );
                })}
              </Horizontal>
            </Vertical>
          </Card>
        ))}
      </MagicGrid>
    </Vertical>
  );
};

export default memo(SpecializedTools);
