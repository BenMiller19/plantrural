import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const modules = [
    {
      id: 1,
      title: "Explorer",
      description: "Character & Calling",
      assignments: {
        create: [
          {
            title: "Calling Narrative Reflection",
            kind: "REGULAR",
            promptText: "Draft key moments that shaped your calling."
          },
          {
            title: "Ministry Calling Narrative",
            kind: "CAPSTONE",
            promptText: "Compose your full calling narrative for review."
          }
        ]
      }
    },
    {
      id: 2,
      title: "Candidate",
      description: "Capacity & Vision",
      assignments: {
        create: [
          {
            title: "Capacity Assessment",
            kind: "REGULAR",
            promptText: "Assess readiness across character, competency, and context."
          },
          {
            title: "Ministry Plan",
            kind: "CAPSTONE",
            promptText: "Submit a written ministry plan with vision and goals."
          }
        ]
      }
    },
    {
      id: 3,
      title: "Catalyst",
      description: "Mobilizing People & Resources",
      assignments: {
        create: [
          {
            title: "Launch Team Map",
            kind: "REGULAR",
            promptText: "Identify key launch team members and roles."
          },
          {
            title: "Confirmed Launch Date",
            kind: "CAPSTONE",
            promptText: "Confirm and document your launch date."
          }
        ]
      }
    },
    {
      id: 4,
      title: "Planter",
      description: "Launch & Stabilization",
      assignments: {
        create: [
          {
            title: "Stabilization Checklist",
            kind: "REGULAR",
            promptText: "Outline milestones for the first 90 days post-launch."
          }
        ]
      }
    },
    {
      id: 5,
      title: "Multiplier",
      description: "Reproducing Leaders",
      assignments: {
        create: [
          {
            title: "Leadership Pipeline",
            kind: "REGULAR",
            promptText: "Identify emerging leaders and next steps."
          },
          {
            title: "Pathway Training Certificate",
            kind: "CAPSTONE",
            promptText: "Generate and share your completion certificate."
          }
        ]
      }
    }
  ];

  for (const module of modules) {
    await prisma.module.upsert({
      where: { id: module.id },
      update: {
        title: module.title,
        description: module.description
      },
      create: module
    });
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
