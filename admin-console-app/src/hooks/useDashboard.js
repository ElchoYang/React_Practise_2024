import useHttp from "./useHttp";

const useDashboard = () => {
  const { get } = useHttp();
  const getChartA = async () => {
    const data = await get("/api/v1/auth/dbd/sales", {}, {});

    const option = {
      title: {
        text: data.title,
      },
      tooltip: {},
      legend: {
        data: data.legend.data,
      },
      xAxis: {
        data: data.xAxis,
      },
      yAxis: {},
      series: data.series,
    };

    return option;
  };

  return {
    getChartA,
  };
};

export default useDashboard;
