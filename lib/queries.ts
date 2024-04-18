import prisma from './prisma';

/**
 * @description Format a string Date `DD-MM-YYYY` to a string ISO format `YYYY-MM-DDTHH:MM:SS`.
 * @param date - The Date to be formatted.
 * @throws Will throw an error if the date format is invalid.
 * @returns The formatted date string.
 */
export function formatDateToISO(date: string): string {
  const parts = date.split('-');

  if (parts.length === 3) {
    const [day, month, year] = parts;
    return new Date(`${year}-${month}-${day}`).toISOString();
  } else {
    throw new Error('Invalid date format. Expected DD-MM-YYYY.');
  }
}

export async function getRushBanlists() {
  const data = await prisma.rushBanlist.findMany();

  if (!data) {
    throw new Error('Rush banlist schema is empty');
  }

  return data;
}

export async function getRushBanlistByDate(date: string) {
  const data = await prisma.rushBanlist.findFirst({
    where: {
      date,
    },
    include: {
      RushRestriction: {
        select: {
          card: {
            select: {
              name: true,
              type: {
                select: {
                  name: true,
                },
              },
            },
          },
          type: {
            select: {
              name: true,
            },
          },
        },
        orderBy: {
          type: { name: 'asc' },
        },
      },
    },
  });

  if (!data) {
    throw new Error(`There are no banlist records for the date: ${date}`);
  }

  return data;
}

export async function getSpeedBanlists() {
  const data = await prisma.speedBanlist.findMany();

  if (!data) {
    throw new Error('Rush banlist schema is empty');
  }

  return data;
}

export async function getSpeedBanlistByDate(date: string) {
  const data = await prisma.speedBanlist.findFirst({
    where: {
      date,
    },
    include: {
      SpeedRestriction: {
        select: {
          card: {
            select: {
              name: true,
              type: {
                select: {
                  name: true,
                },
              },
            },
          },
          type: {
            select: {
              name: true,
            },
          },
        },
        orderBy: {
          type: { name: 'asc' },
        },
      },
    },
  });

  if (!data) {
    throw new Error(`There are no banlist records for the date: ${date}`);
  }

  return data;
}
