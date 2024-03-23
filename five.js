let package = "standard"
switch (package) {
    case "standard":
        console.log("Takes 3-5 days");
        break
    case "express":
        console.log("Takes 1-2 days");
        break
    case "overnight":
        console.log("Delivered next day");
        break
    default:
        console.log("Invalid")
        break;
}