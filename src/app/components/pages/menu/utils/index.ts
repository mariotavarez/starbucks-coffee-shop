import { Data } from '../../../../models/menu.models';

/**
 * Sorts the menu details based on the ID in ascending order.
 * @param menuDetails - The array of menu details to be sorted.
 * @returns An array of menu details with the menu_details.data sorted by ID in ascending order.
 */
export const sortMenuDetails = (menuDetails: Data[]): Data[] => {
  const dataToSort = menuDetails;

  return dataToSort.map((menu) => {
    const sortedMenuDetails = menu.attributes.menu_details.data.sort(
      (a, b) => a.id - b.id
    );

    const sortedData = {
      ...menu,
      attributes: {
        ...menu.attributes,
        menu_details: { data: sortedMenuDetails },
      },
    };
    return sortedData;
  });
};
