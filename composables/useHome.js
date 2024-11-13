import axios from "axios";
export const useHome = () => {
  const newsList = ref([]);
  const isLoading = ref(false);

  const getList = async () => {
    const url = "https://nuxr3.zeabur.app/api/v1/home/news/";

    await useAsyncData("FreyjaHotelAPI", async () => {
      isLoading.value = true;
      try {
        const { data } = await axios.get(url);
        newsList.value = data.result;
        isLoading.value = false;

        return;
      } catch (error) {
        alert(`發生錯誤： ${error.message}`);
      } finally {
        isLoading.value = false;
      }
    });
  };

  return {
    newsList,
    isLoading,
    getList,
  };
};
