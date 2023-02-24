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
      x = a[i]["indexedValue"][0].split("_")[1];
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

export function currentStatus(a) {
  for (let i = 0; i < a.length; i++) {
    if (a != null && a[i]["fieldKey"] == "Current Status") {
      //console.log("hellllp",_a[i]['fieldKey'])
      // this.x=_a[i]['indexedValue'][0].split("_")[1];
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
