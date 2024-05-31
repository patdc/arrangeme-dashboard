import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

interface CountryData {
  comissions: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class MetricsService {
  getTotalSales(data: Product[]) {
    return data.reduce((total, item) => {
      if (item && item['Sales'] !== undefined) {
        const sales = parseFloat(item['Sales'].replace(/[\$\(\)]/g, ''));
        if (isNaN(sales)) {
          console.error(`Could not parse Sales value: ${item['Sales']}`);
          return total;
        }
        return total + sales;
      } else {
        console.error(
          `Item or Sales field is undefined: ${JSON.stringify(item)}`
        );
        return total;
      }
    }, 0);
  }

  getTotalCommissions(data: Product[]) {
    return data.reduce((total, item) => {
      if (item && item['Est. Commissions'] !== undefined) {
        const commissions = parseFloat(
          item['Est. Commissions'].replace(/[\$\(\)]/g, '')
        );
        if (isNaN(commissions)) {
          console.error(
            `Could not parse Commissions value: ${item['Est. Commissions']}`
          );
          return total;
        }
        return total + commissions;
      } else {
        console.error(
          `Item or Est. Commissions field is undefined: ${JSON.stringify(item)}`
        );
        return total;
      }
    }, 0);
  }

  getTotalQuantity(data: Product[]) {
    return data.reduce((total, item) => {
      const quantity = parseInt(item['Quantity']);
      if (isNaN(quantity)) {
        console.error(`Could not parse Quantity value: ${item['Quantity']}`);
        return total;
      }
      return total + quantity;
    }, 0);
  }

  getTotalRefunds(data: Product[]): number {
    return data.reduce((totalRefunds: number, item: Product) => {
      const quantity = Number(item['Quantity']);
      if (quantity < 0) {
        let sales = item['Sales'].replace(/[\$\(\),]/g, '');
        let salesNumber = parseFloat(sales);
        if (isNaN(salesNumber)) {
          salesNumber = 0;
        }
        totalRefunds += salesNumber;
      }
      return totalRefunds;
    }, 0);
  }

  countriesCount(data: Product[]) {
    let countriesList: string[] = [];

    data.forEach((item) => {
      // Calculate countries
      if (!countriesList.includes(item.Location)) {
        countriesList.push(item.Location);
      }
    });
    return countriesList;
  }

  salesAndQuantityByCountry(data: Product[]) {
    const counts: { [key: string]: CountryData } = {};

    data.forEach((item) => {
      const quantity = parseInt(item['Quantity'], 10) || 0;

      if (quantity > 0) {
        let comissions = 0;
        if (item && typeof item['Est. Commissions'] === 'string') {
          const comissionsString = item['Est. Commissions'].replace(
            /[\$\(\)]/g,
            ''
          );
          comissions = parseFloat(comissionsString) || 0;
        }

        if (!counts[item.Location]) {
          counts[item.Location] = { comissions: 0, quantity: 0 };
        }
        counts[item.Location].comissions += comissions;
        counts[item.Location].quantity += quantity;
      }
    });

    const countsArray = Object.keys(counts).map((country) => {
      return {
        country: country,
        comissions: parseFloat(counts[country].comissions.toFixed(2)),
      };
    });

    countsArray.sort((a, b) => b.comissions - a.comissions);
    return countsArray;
  }

  getMostUsedFormats(data: Product[]): { format: string; count: number }[] {
    const formatCounts: { [key: string]: number } = {};

    data.forEach((item) => {
      formatCounts[item.Format] = (formatCounts[item.Format] || 0) + 1;
    });

    const formatArray = Object.keys(formatCounts).map((format) => ({
      format: format,
      count: formatCounts[format],
    }));

    formatArray.sort((a, b) => b.count - a.count);

    return formatArray;
  }
}
