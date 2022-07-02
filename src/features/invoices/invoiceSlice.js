import { createSlice } from "@reduxjs/toolkit";
const initialState = [{
        id: "RT3080",
        name: "foo",
        type: "Paid",
        date: "19 Aug 2021",
        total: 1800,
        orderDescription: "Graphic Design",
        address1: "19 Union Terrace",
        address2: "London",
        zipcode: "E1 3EZ",
        country: "United Kingdom",
        invoiceDate: "August 11, 2021",
        paymentDue: "20 Sep 2021",
        billTo: "Alex",
        sentTo: "darren@mail.com",
        orderDetail: [{
                name: "Banner Design",
                price: 145,
                amount: 1,
            },
            {
                name: "Email Design",
                price: 200,
                amount: 2,
            },
        ],
    },
    {
        id: "XM9141",
        name: "bar",
        type: "Pending",
        date: "20 Aug 2021",
        total: 1800,
        orderDescription: "Graphic Design",
        address1: "19 Union Terrace",
        address2: "London",
        zipcode: "E1 3EZ",
        country: "United Kingdom",
        invoiceDate: "21 Aug 2021",
        paymentDue: "20 Sep 2021",
        billTo: "Alex",
        sentTo: "darren@mail.com",
        orderDetail: [{
                name: "Banner Design",
                price: 145,
                amount: 1,
            },
            {
                name: "Email Design",
                price: 200,
                amount: 2,
            },
        ],
    },
    {
        id: "RG0314",
        name: "foobar",
        type: "Draft",
        date: "21 Aug 2021",
        total: 1800,
        orderDescription: "Graphic Design",
        address1: "19 Union Terrace",
        address2: "London",
        zipcode: "E1 3EZ",
        country: "United Kingdom",
        invoiceDate: "21-08-2021",
        paymentDue: "20-09-2021",
        billTo: "Alex",
        sentTo: "darren@mail.com",
        orderDetail: [{
                name: "Banner Design",
                price: 145,
                amount: 1,
            },
            {
                name: "Email Design",
                price: 200,
                amount: 2,
            },
        ],
    },
    {
        id: "AA1922",
        name: "barfoo",
        type: "Paid",
        date: "22 Feb 2021",
        total: 1800,
        orderDescription: "Graphic Design",
        address1: "19 Union Terrace",
        address2: "London",
        zipcode: "E1 3EZ",
        country: "United Kingdom",
        invoiceDate: "21 Aug 2021",
        paymentDue: "20 Sep 2021",
        billTo: "Alex",
        sentTo: "darren@mail.com",
        orderDetail: [{
                name: "Banner Design",
                price: 145,
                amount: 1,
            },
            {
                name: "Email Design",
                price: 200,
                amount: 2,
            },
        ],
    },
];

export const invoiceSlice = createSlice({
    name: "invoice",
    initialState,
    reducers: {
        addNewInvoice: (state, action) => {
            state.push(action.payload);
        },
        removeInvoice: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
    },
});

export const { addNewInvoice, removeInvoice } = invoiceSlice.actions;

export default invoiceSlice.reducer;