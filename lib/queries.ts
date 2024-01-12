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

export async function getBanlistByFormat(format: number) {
  const data = await prisma.banlist.findMany({
    where: {
      date: {
        gte: '2017-01-01T00:00:00Z',
        lt: '2025-01-01T00:00:00Z',
      },
      formatId: format,
    },
  });

  if (!data) {
    throw new Error('Banlist schema is empty');
  }

  return data;
}

export async function getBanlistByDate(date: string, format: number) {
  const data = await prisma.banlist.findFirst({
    where: {
      AND: {
        formatId: format,
        date,
      },
    },
    include: {
      restrictions: {
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
