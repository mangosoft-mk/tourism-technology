import { FunctionDeclaration, Type } from '@google/genai';

export const findVacationPackagesFunctionDeclaration: FunctionDeclaration = {
  name: 'findVacationPackages',
  description: 'Finds vacation packages based on user preferences for a trip to Antalya, Turkey.',
  parameters: {
    type: Type.OBJECT,
    properties: {
      checkInDate: {
        type: Type.STRING,
        description: 'The check-in date for the hotel, in YYYY-MM-DD format.',
      },
      nights: {
        type: Type.INTEGER,
        description: 'The total number of nights for the stay.',
      },
      adults: {
        type: Type.INTEGER,
        description: 'The number of adults.',
      },
      children: {
        type: Type.INTEGER,
        description: 'The number of children. If zero, childrenAges should be empty.',
      },
      childrenAges: {
        type: Type.ARRAY,
        description: 'An array of ages for each child. Should be empty if there are no children.',
        items: {
          type: Type.INTEGER,
        },
      },
    },
    required: ['checkInDate', 'nights', 'adults', 'children', 'childrenAges'],
  },
};
