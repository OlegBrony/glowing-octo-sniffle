import {combine, createEvent, createStore} from "../pkg/effector.js";
export function createFormField({
  defaultValue,
  reducer,
  clearTouchEvent,
  rules = {}
}) {
  const $store = createStore(defaultValue);
  const storeChanged = createEvent();
  $store.on(storeChanged, reducer);
  const $innerError = $store.map((store) => {
    if (rules.required) {
      const isStoreExists = typeof store === "number" ? true : !!store;
      if (!isStoreExists)
        return rules.required;
    }
    if (rules.minLen && typeof store === "string" && store.length < rules.minLen.value) {
      return rules.minLen.error;
    }
    if (rules.maxLen && typeof store === "string" && store.length > rules.maxLen.value) {
      return rules.maxLen.error;
    }
    if (rules.email && typeof store === "string" && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(store)) {
      return rules.email;
    }
    if (rules.date && store instanceof Date) {
      if (rules.date.years) {
        if (rules.date.years.min) {
        }
      }
    }
    if (rules.lower && typeof store === "string" && !/([a-z])/.test(store))
      return rules.lower;
    if (rules.upper && typeof store === "string" && !/([A-Z])/.test(store))
      return rules.upper;
    if (rules.digit && typeof store === "string" && !/([0-9])/.test(store))
      return rules.digit;
    if (rules.special && typeof store === "string" && !/([^A-Za-z0-9])/.test(store))
      return rules.special;
    return "";
  });
  const $isFieldTouched = createStore(false);
  const fieldTouched = createEvent();
  $isFieldTouched.on(fieldTouched, () => true);
  if (clearTouchEvent)
    $isFieldTouched.on(clearTouchEvent, () => false);
  const $error = combine($isFieldTouched, $innerError, (isFieldTouched, innerError) => {
    if (isFieldTouched)
      return innerError;
    return "";
  });
  return {
    $store,
    storeChanged,
    $innerError,
    fieldTouched,
    $error,
    $isFieldTouched
  };
}
