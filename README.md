# `react-bootstrap-table` issue repro repo

This repo is a bare minimal application to showcase [react-bootstrap-table/481](https://github.com/AllenFang/react-bootstrap-table/issues/481)

To reproduce the issue, clone this repo and run:

```
yarn install
yarn start
```
In the table, click on one column twice to sort twice (for example, the Last Name column). Then, click a row to select it. Notice that the data does not stay the same after `setState` is called in the `onRowClick` callback. Notice that it only happens the first time a row is selected.