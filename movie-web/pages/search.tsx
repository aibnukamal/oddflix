import { useState } from "react";
import Head from "next/head";
import { Select, DatePicker, Space, Button } from "antd";

import SearchMovie from "./../components/SearchMovie";

const Search = () => {
  const { Option } = Select;
  const { RangePicker } = DatePicker;

  const [sort, setSort] = useState("");
  const [date, setDate] = useState(["", ""]);

  const onChangeDate = (_: unknown, dateString: string[]) => {
    setDate(dateString);
  };

  const handleClearFilter = () => {
    setSort("");
    setDate(["", ""]);
  };

  return (
    <>
      <Head>
        <title>OddFlix | Serach Movie</title>
      </Head>

      <div style={{ display: "flex", width: "100%", margin: "30px 50px" }}>
        <Space size="middle">
          <RangePicker onChange={onChangeDate} />
          <Select
            style={{ width: 200 }}
            value={sort}
            onChange={(value) => setSort(value.toString())}
            placeholder="Sort By"
          >
            <Option value="popularity.desc">High Popularity</Option>
            <Option value="popularity.asc">Low Popularity</Option>
            <Option value="release_date.desc">Latest Release date</Option>
            <Option value="release_date.asc">Past Release date</Option>
            <Option value="vote_count.desc">High Vote count</Option>
            <Option value="vote_count.asc">Low Vote count</Option>
          </Select>
          <Button ghost size="large" onClick={handleClearFilter}>
            Clear Filter
          </Button>
        </Space>
      </div>

      <SearchMovie
        genreId={0}
        genreTitle="Search Movie"
        sort={sort}
        date={date}
      />
    </>
  );
};

export default Search;
