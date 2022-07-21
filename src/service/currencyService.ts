import { currencyapi } from "./api";

const apiKey = "VJdq052s1qJXxUV9cVXDtnwWeiimXpDB";

export default {
  async getAllCurrencies() {
    var response = await currencyapi().get("symbols", {
      headers: { apikey: apiKey },
    });
    return response.data;
  },
  //   async getParticularTodo(todo_id: number) {
  //     var response = await Api().get("todos");
  //     return response.data.filter((todo: TodoModel) => todo.id === todo_id)[0];
  //   },
  async getCurrenciesToBase(base: string) {
    var response = await currencyapi().get("latest", {
      params: { base: base },
      headers: { apikey: apiKey },
    });
    return response.data;
  },

  async makeConvertions(amount: number, from: string, to: string) {
    var response = await currencyapi().get("convert", {
      params: {
        amount: Number(amount),
        from: from.toUpperCase(),
        to: to.toUpperCase(),
      },
      headers: { apikey: apiKey },
    });
    return response.data;
  },
};
