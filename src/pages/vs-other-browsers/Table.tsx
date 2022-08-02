import { Table, ThemeIcon } from "@mantine/core";
import { allFeatures } from "contentlayer/generated";
import { FaCheck, FaTimes } from "react-icons/fa";

export const FeaturesTable = () => {
  const standardFeatures = [{ title: "Browsing" }, { title: "Dev Tools" }];
  const browsers = ["Sizzy", "Chrome", "Firefox", "Safari"];

  let literallyAllFeatures = [
    ...standardFeatures.map((f) => ({ ...f, basic: true })),
    ...allFeatures.map((f) => ({ ...f, basic: false })),
  ];

  return (
    <Table>
      <thead>
        <tr>
          <th>Feature</th>
          {browsers.map((b) => (
            <th key={b}>{b}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {literallyAllFeatures.map((f) => (
          <tr>
            <td>{f.title}</td>
            {browsers.map((b) => {
              const hasFeature = f.basic || b === "Sizzy";
              return (
                <td>
                  {hasFeature && (
                    <ThemeIcon
                      size="lg"
                      variant="gradient"
                      gradient={{ from: "indigo", to: "purple" }}
                      sx={{ borderRadius: "100%" }}
                    >
                      <FaCheck />
                    </ThemeIcon>
                  )}
                  {!hasFeature && (
                    <ThemeIcon
                      size="lg"
                      variant="gradient"
                      sx={{ borderRadius: "100%" }}
                      gradient={{ from: "gray", to: "black" }}
                    >
                      <FaTimes />
                    </ThemeIcon>
                  )}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
