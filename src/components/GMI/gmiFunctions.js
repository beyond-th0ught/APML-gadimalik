let x;
let z;

export function wp(a) {
  //   console.log(a[]);
  for (let i = 0; i < a.length; i++) {
    if (a[i]["fieldKey"] == "Work Place") {
      console.log(a[i]["fieldKey"]);
      x = a[i]["indexedValue"][0].split("_")[1];
      break;
    }
  }
  return x;
}

export function kad(a) {
  for (let i = 0; i < a.length; i++) {
    if (a != null && a[i]["fieldKey"] == "Vehicle Status Bot") {
      //console.log("hellllp",_a[i]['fieldKey'])
      x = a[i]["value"];
      break;
    }
  }
  return x;
}

export function kbd(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i]["fieldKey"] == "Problem Is") {
      //console.log("hellllp",_a[i]['fieldKey'])
      x = a[i]["indexedValue"][0].split("_")[1].split("/")[0];
      break;
    }
  }
  return x;
}

export function vecNo(a) {
  let x;
  for (let i = 0; i < a.length; i++) {
    if (a[i]["fieldKey"] == "Vehicle Number") {
      x = a[i]["value"];
      return x.replace(/[^0-9]/g, "").substring(2);
    } else {
      x = a[i]["value"];
    }
  }
  return x;
}

export function vec(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i]["fieldKey"] == "Vehicle Number") {
      //console.log("hellllp",_a[i]['fieldKey'])
      x = a[i]["indexedValue"][0].split("_")[1];

      break;
    }
  }
  return x;
}

export function currentStatus(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i]["fieldKey"] == "Current Status") {
      z = a[i]["value"];
      break;
    }
  }
  if (z == "UNATTENDED") {
    z = "❌";
  } else if (z == "WIP" || z == " WIP") {
    z = "🔧⚙️";
  } else if (z == "PAYMENT PENDING" || z == " PAYMENT PENDING") {
    z = "💲";
  } else if (z == "ON WAY PAYMENT PENDING") {
    z = "🔄💲";
  } else if (
    z == "ONWAY DOCUMENTATION PENDING" ||
    z == "ONWAY DOCUMENTATION PENDING "
  ) {
    z = "🟢";
  } else if (z == "WAIT FOR APPROVAL") {
    z = "✋";
  } else {
    return z;
  }
  return z;
}

export function len(a) {
  var xz;
  for (let i = 0; i < a.length; i++) {
    if (a[i]["fieldKey"] == "VehicleDescription") {
      xz = a[i]["value"];

      break;
    } else {
      xz = "-";
    }
  }

  z = xz;
  if (z.includes("MXL")) {
    z = "🚛";
  } else if (z.includes("SXL") || z == "SXL") {
    z = "🚚";
  } else if (z.includes("TRAILER") || z == "TRAILER") {
    z = "🚍";
  } else {
    z = "🚜";
  }
  return z;
}

export function vehicleImg(a) {
  if (a == "TATA") {
    a = "https://logos-marques.com/wp-content/uploads/2021/02/Tata-Logo.png";
  } else if (a == "ASHOK LEYLAND") {
    a = "https://i.ibb.co/XFdTXJH/ashok-leyland.png";
  } else if (a == "EICHER") {
    a =
      "https://i.pinimg.com/originals/c5/d1/4f/c5d14ff09fa2785206d54031091950d7.jpg";
  } else if (a == "BHARAT BENZ") {
    a =
      "https://i.pinimg.com/originals/73/06/ad/7306ad1a0d868aaef1229848caf5d905.jpg";
  } else if (a == "MAHINDRA & MAHINDRA") {
    a = "https://i.ibb.co/bK4DRLt/Screenshot-2.png";
  } else {
    a = a;
  }
  return a;
}

export function makeVehicle(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i]["fieldKey"] == "MakeDate") {
      //console.log("hellllp",_a[i]['fieldKey'])
      x = a[i]["indexedValue"][0].split("_")[1];
      break;
    }
  }

  var date = new Date(Number(x));
  return date.getFullYear();
}

export function AMCCover(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i]["fieldKey"] == "AMC") {
      //console.log("hellllp",_a[i]['fieldKey'])
      x = a[i]["indexedValue"][0].split("_")[1];
      break;
    } else {
      x = "-";
    }
  }
  return x;
}

export function local(a) {
  var xz;
  for (let i = 0; i < a.length; i++) {
    if (a[i]["fieldKey"] == "VehicleDescription") {
      xz = a[i]["value"];

      break;
    } else {
      xz = "-";
    }
  }
  if (xz.includes("LOCAL") || xz.includes("Local")) {
    xz = xz.split("_")[1];
  } else if (xz.includes("LINE")) {
    xz = xz.split("_")[0];
  }
  return xz;
}
