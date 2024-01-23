import { Template, BLANK_PDF } from '@pdfme/common';

export const template: Template = {
  basePdf: BLANK_PDF,
  schemas: [
    {
      a: {
        type: 'text',
        position: { x: 10, y: 10 },
        width: 100,
        height: 20,
      },
      b: {
        type: 'text',
        position: { x: 10, y: 20 },
        width: 100,
        height: 20,
      },
    },
  ],
};
