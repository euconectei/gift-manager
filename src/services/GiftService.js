import { db } from "./firebase";

const GiftService = {
  addItem: (name) => {
    const newItemKey = db.push().key;
    console.log({ newItemKey, name });
    return db.child(newItemKey).update({ item: name });
  },
  // addItem: (name) => {},
  // addItem: (name) => {},
  // addItem: (name) => {},
  // addItem: (name) => {},
  // addItem: (name) => {},
};

export default GiftService;
