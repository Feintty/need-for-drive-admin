import moment from "moment";

export const getDateData = () => {
  const week = moment().week(-1).valueOf().toString();
  const month = moment().month(-1).valueOf().toString();
  return [{ "За неделю": week }, { "За месяц": month }];
};

export const getStatusData = () => [
  { Новые: "5e26a191099b810b946c5d89" },
  { Потвержденные: "5e26a1f0099b810b946c5d8b" },
  { Отмененные: "5e26a1f5099b810b946c5d8c" },
];
