import { db } from "./firebase";

const GiftService = {
  addItem: (name, done, group, presenter) => {
    const newItemKey = db.push().key;
    return db.child(newItemKey).update({ name, done, group, presenter });
  },
  // addItem: (name) => {},
  // addItem: (name) => {},
  // addItem: (name) => {},
  // addItem: (name) => {},
  // addItem: (name) => {},
};

export default GiftService;
