let x, z;
export function kad(a) {
    for (let i = 0; i < a.length; i++) {
      if (a[i]["fieldKey"] == "Vehicle Status Bot") {
        x = a[i]["value"];
        break;
      }
    }
    return x;
  }
  
  export function kbd(a) {
    for (let i = 0; i < a.length; i++) {
      if (a[i]["fieldKey"] == "Problem Is") {
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
        return x;
      } else {
        x = a[i]["value"];
      }
    }
    return x;
  }
  
  export function vec(a) {
    for (let i = 0; i < a.length; i++) {
      if (a[i]["fieldKey"] == "Vehicle Number") {
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
    console.log(z);
    if (z.includes("MXL")) {
      z = "LINE_MXL";
    } else if (z.includes("SXL") || z == "SXL") {
      z = "LINE_SXL";
    } else if (z.includes("TRAILER") || z == "TRAILER") {
      z = "LINE_TRAILER";
    } else if (z.includes("AS") || z == "AS") {
      z = "LINE_AS";
    } else if (z.includes("DOUBLEDECK") || z == "DOUBLEDECK") {
      z = "LINE_DOUBLEDECK";
    } else if (
      z.includes("SP") ||
      (z == "SP" && (!z.includes("DOUBLEDECK") || z != "DOUBLEDECK"))
    ) {
      z = "LINE_SP";
    } else if (z.includes("CAR") || z == "CAR") {
      z = "LINE_CAR";
    } else {
      z = "OTHER";
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
  
  export function gad(a) {
    for (let i = 0; i < a.length; i++) {
      if (a[i]["fieldKey"] == "FleetZoneResponsiblePerson") {
        x = a[i]["indexedValue"][0].split("_")[1];
        var op = "";
        for (let j = 0; j < a[i]["value"].split(" ").length; j++) {
          op = op + a[i]["value"].split(" ")[j].substring(0, 1);
        }
  
        x = op;
        break;
      }
    }
    return x;
  }
  
  export function getT(a) {
    var countFrom = new Date(a).getTime();
    let now:any = new Date();
    let b:any = new Date(countFrom);
    let distance = now - b;
  
    var secondsInADay = 60 * 60 * 1000 * 24;
    var secondsInAHour = 60 * 60 * 1000;
  
    let days = Math.floor((distance / secondsInADay) * 1);
    let hours = Math.floor(((distance % secondsInADay) / secondsInAHour) * 1);
    let mins = Math.floor(
      (((distance % secondsInADay) % secondsInAHour) / (60 * 1000)) * 1
    );
    let secs = Math.floor(
      ((((distance % secondsInADay) % secondsInAHour) % (60 * 1000)) / 1000) * 1
    );
    let xyz = days + "d " + hours + "h " + mins + "m " + secs + "s ";
    return xyz;
  }
  
  export function workP(a) {
    for (let i = 0; i < a.length; i++) {
      if (a[i]["fieldKey"] == "Work Place") {
        z = a[i]["value"];
        break;
      }
    }
  
    return z;
  }
  
  export function Workplacesplit(a) {
    z = a;
    var data;
    if (z == "Local") {
      data = z;
    } else if (z == "Apml Workshop- KWS" || z == "Apml Workshop- CWK") {
      data = z.split("Workshop-")[1];
    } else if (z == "Workshop-(Tata)" || z == "Workshop-(Eicher)") {
      data = z.split("(")[1].split(")")[0];
    } else if (z == "Workshop-(Ashok Leyland)") {
      data = z.split("(")[1].split(")")[0].split(" ")[1];
    }
    return data;
  }