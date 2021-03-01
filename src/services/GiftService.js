import { onlyUniqueGroups } from "../utils";
import { db } from "./firebase";

const GiftService = {
  addItem: (name, done, group, presenter) => {
    const newItemKey = db.push().key;
    return db.child(newItemKey).update({ name, done, group, presenter });
  },
  listItem: async () => {
    const res = await db.once("value");
    const items = res.val();

    const data = Object.keys(items).map((item) => ({
      id: item,
      ...items[item],
    }));

    const dataOrdered = data.sort((a, b) => (a.item < b.item ? -1 : 1));

    const groups = onlyUniqueGroups(dataOrdered);

    const dataGrouped = groups.map((group) => ({ group, items: [] }));

    data.map((item) => {
      const index = groups.indexOf(item.group);
      dataGrouped[index].items.push(item);
    });

    return dataGrouped.sort((a, b) => (a.group < b.group ? -1 : 1));
  },
  // addItem: (name) => {},
  // addItem: (name) => {},
  // addItem: (name) => {},
  // addItem: (name) => {},
};

export default GiftService;
