export function converCurrency(number) {
    console.log("====================================");
    console.log(number);
    console.log("====================================");
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(number);
}