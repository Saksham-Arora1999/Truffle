const data = [
  {
    id: "1",
    name: "Saksham ",
    address: "1160 W Linden",
    hospital_name: "XYZ",
    date: new Date(2000, 07, 14),
    amount: "2000",
  },
  {
    id: "2",
    name: "Arora",
    address: "1160 W Linden",
    hospital_name: "XYZ",
    date: new Date(2020, 10, 24),
    amount: "2000",
  },
];

exports.getAllData = (req, res) => {
  res.status(200).json({
    status: "success",
    data: data,
  });
  // console.log(data);
  res.end();
};

exports.addNewData = (req, res) => {
  console.log(req.body);
  // res.send("Done");
  const newData = Object.assign({ id: Math.random().toString() }, req.body);
  data.unshift(newData);
  res.status(200).json({
    status: "success",
    data: data,
  });
};
