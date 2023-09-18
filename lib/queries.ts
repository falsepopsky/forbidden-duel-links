import prisma from './prisma';

function handleErrors(error: unknown) {
  if (error instanceof Error) {
    console.error('Error while querying the database: ', error.message);
  } else {
    console.log('Something went wrong: ', error);
  }
}

/**
 * @description Format a Date object to a string in the format `DD-MM-YYYY`.
 * @param date - The Date object to be formatted.
 * @returns The formatted date string.
 */
export function formatDateToDDMMYYYY(date: Date): string {
  const format = new Date(date);
  return `${format.getUTCDate().toString().padStart(2, '0')}-${(format.getUTCMonth() + 1)
    .toString()
    .padStart(2, '0')}-${format.getUTCFullYear().toString()}`;
}

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

export async function getBanlistDates() {
  try {
    const data = await prisma.banlist.findMany({
      where: {
        date: {
          gte: '2017-01-01T00:00:00Z',
          lt: '2024-01-01T00:00:00Z',
        },
      },
    });

    if (!data) {
      throw new Error('Banlist schema is empty');
    }

    return data;
  } catch (error) {
    handleErrors(error);
  }
}

export async function getBanlistByDate(date: string) {
  try {
    const data = await prisma.banlist.findUnique({
      where: {
        date,
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
  } catch (error) {
    handleErrors(error);
  }
}
