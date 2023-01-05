var ad_name;
// var custom_commit = document.getElementById("custom-commit");
var enter_ad_name = document.getElementById("enter_ad_name");
var custom_commit_message = "updates&quot";

function empty_fields() {
  enter_ad_name.value = "";
  //   custom_commit.value = "";
  //   custom_commit_message = "updates&quot";
}

// function commit() {
//   if (custom_commit.value !== "") {
//     custom_commit_message = custom_commit.value;
//   }
// }

function myFunction() {
  ad_name = enter_ad_name.value;

  document.getElementById("build").innerHTML = "gulp --build " + ad_name;

  document.getElementById("rebuild").innerHTML =
    "rm -rf build/" +
    ad_name +
    " && rm -rf output/" +
    ad_name +
    " && gulp --build " +
    ad_name;

  document.getElementById("push").innerHTML =
    "git add . && git commit -m &quot" + ad_name + " updates&quot && git push ";

  document.getElementById("push-publish").innerHTML =
    "git pull && git add . && git commit -m &quot" +
    ad_name +
    " updates&quot && git push && nvm use 16 && node publish send " +
    ad_name;

  document.getElementById("publish-static").innerHTML =
    "git pull && git add . && git commit -m &quot" +
    ad_name +
    " updates&quot && git push && nvm use 16 && node publish send " +
    ad_name +
    " && node get_review 1 " +
    ad_name +
    " && open -a &quotGoogle Chrome&quot review/review_html/index.html";

  document.getElementById("publish").innerHTML =
    "nvm use 16 && node publish send " + ad_name;

  document.getElementById("static").innerHTML =
    "node get_review 1 " +
    ad_name +
    " && open -a &quotGoogle Chrome&quot review/review_html/index.html";

  document.getElementById("open-in-vs").innerHTML =
    "code -r src2/gd/" + ad_name + "/datafile.json";

  document.getElementById("do-data").innerHTML = "node do_data";

  document.getElementById("pull").innerHTML = "git pull";

  document.getElementById("nvm").innerHTML = "nvm use 16";

  document.getElementById("static-name").innerHTML =
    ad_name + "_static_proof_v";
}

//frame breaks
var string_Raw = String.raw`\A`;

//feature/rebuild

document.getElementById("frame1-2").innerHTML += "//Frame 1 Break";
document.getElementById("frame1-2").innerHTML += "<br>";
document.getElementById("frame1-2").innerHTML +=
  ".frame-container.foreground .frame-1 .textholder .text span:nth-child(2)::before{";
document.getElementById("frame1-2").innerHTML += "<br>";
document.getElementById("frame1-2").innerHTML +=
  "content:'" + string_Raw + "' !important;";
document.getElementById("frame1-2").innerHTML += "<br>";
document.getElementById("frame1-2").innerHTML += "white-space: pre !important;";
document.getElementById("frame1-2").innerHTML += "<br>";
document.getElementById("frame1-2").innerHTML += "}";

document.getElementById("frame1-3").innerHTML += "//Frame 1 Break";
document.getElementById("frame1-3").innerHTML += "<br>";
document.getElementById("frame1-3").innerHTML +=
  ".frame-container.foreground .frame-1 .textholder .text span:nth-child(3)::before{";
document.getElementById("frame1-3").innerHTML += "<br>";
document.getElementById("frame1-3").innerHTML +=
  "content:'" + string_Raw + "' !important;";
document.getElementById("frame1-3").innerHTML += "<br>";
document.getElementById("frame1-3").innerHTML += "white-space: pre !important;";
document.getElementById("frame1-3").innerHTML += "<br>";
document.getElementById("frame1-3").innerHTML += "}";

document.getElementById("frame1-4").innerHTML += "//Frame 1 Break";
document.getElementById("frame1-4").innerHTML += "<br>";
document.getElementById("frame1-4").innerHTML +=
  ".frame-container.foreground .frame-1 .textholder .text span:nth-child(4)::before{";
document.getElementById("frame1-4").innerHTML += "<br>";
document.getElementById("frame1-4").innerHTML +=
  "content:'" + string_Raw + "' !important;";
document.getElementById("frame1-4").innerHTML += "<br>";
document.getElementById("frame1-4").innerHTML += "white-space: pre !important;";
document.getElementById("frame1-4").innerHTML += "<br>";
document.getElementById("frame1-4").innerHTML += "}";

document.getElementById("frame1-5").innerHTML += "//Frame 1 Break";
document.getElementById("frame1-5").innerHTML += "<br>";
document.getElementById("frame1-5").innerHTML +=
  ".frame-container.foreground .frame-1 .textholder .text span:nth-child(5)::before{";
document.getElementById("frame1-5").innerHTML += "<br>";
document.getElementById("frame1-5").innerHTML +=
  "content:'" + string_Raw + "' !important;";
document.getElementById("frame1-5").innerHTML += "<br>";
document.getElementById("frame1-5").innerHTML += "white-space: pre !important;";
document.getElementById("frame1-5").innerHTML += "<br>";
document.getElementById("frame1-5").innerHTML += "}";

document.getElementById("frame1-6").innerHTML += "//Frame 1 Break";
document.getElementById("frame1-6").innerHTML += "<br>";
document.getElementById("frame1-6").innerHTML +=
  ".frame-container.foreground .frame-1 .textholder .text span:nth-child(6)::before{";
document.getElementById("frame1-6").innerHTML += "<br>";
document.getElementById("frame1-6").innerHTML +=
  "content:'" + string_Raw + "' !important;";
document.getElementById("frame1-6").innerHTML += "<br>";
document.getElementById("frame1-6").innerHTML += "white-space: pre !important;";
document.getElementById("frame1-6").innerHTML += "<br>";
document.getElementById("frame1-6").innerHTML += "}";

document.getElementById("frame1-7").innerHTML += "//Frame 1 Break";
document.getElementById("frame1-7").innerHTML += "<br>";
document.getElementById("frame1-7").innerHTML +=
  ".frame-container.foreground .frame-1 .textholder .text span:nth-child(7)::before{";
document.getElementById("frame1-7").innerHTML += "<br>";
document.getElementById("frame1-7").innerHTML +=
  "content:'" + string_Raw + "' !important;";
document.getElementById("frame1-7").innerHTML += "<br>";
document.getElementById("frame1-7").innerHTML += "white-space: pre !important;";
document.getElementById("frame1-7").innerHTML += "<br>";
document.getElementById("frame1-7").innerHTML += "}";

document.getElementById("frame1-8").innerHTML += "//Frame 1 Break";
document.getElementById("frame1-8").innerHTML += "<br>";
document.getElementById("frame1-8").innerHTML +=
  ".frame-container.foreground .frame-1 .textholder .text span:nth-child(8)::before{";
document.getElementById("frame1-8").innerHTML += "<br>";
document.getElementById("frame1-8").innerHTML +=
  "content:'" + string_Raw + "' !important;";
document.getElementById("frame1-8").innerHTML += "<br>";
document.getElementById("frame1-8").innerHTML += "white-space: pre !important;";
document.getElementById("frame1-8").innerHTML += "<br>";
document.getElementById("frame1-8").innerHTML += "}";

document.getElementById("frame1-9").innerHTML += "//Frame 1 Break";
document.getElementById("frame1-9").innerHTML += "<br>";
document.getElementById("frame1-9").innerHTML +=
  ".frame-container.foreground .frame-1 .textholder .text span:nth-child(9)::before{";
document.getElementById("frame1-9").innerHTML += "<br>";
document.getElementById("frame1-9").innerHTML +=
  "content:'" + string_Raw + "' !important;";
document.getElementById("frame1-9").innerHTML += "<br>";
document.getElementById("frame1-9").innerHTML += "white-space: pre !important;";
document.getElementById("frame1-9").innerHTML += "<br>";
document.getElementById("frame1-9").innerHTML += "}";

document.getElementById("frame1-10").innerHTML += "//Frame 1 Break";
document.getElementById("frame1-10").innerHTML += "<br>";
document.getElementById("frame1-10").innerHTML +=
  ".frame-container.foreground .frame-1 .textholder .text span:nth-child(10)::before{";
document.getElementById("frame1-10").innerHTML += "<br>";
document.getElementById("frame1-10").innerHTML +=
  "content:'" + string_Raw + "' !important;";
document.getElementById("frame1-10").innerHTML += "<br>";
document.getElementById("frame1-10").innerHTML +=
  "white-space: pre !important;";
document.getElementById("frame1-10").innerHTML += "<br>";
document.getElementById("frame1-10").innerHTML += "}";

document.getElementById("frame2-2").innerHTML += "//Frame 2 Break";
document.getElementById("frame2-2").innerHTML += "<br>";
document.getElementById("frame2-2").innerHTML +=
  ".frame-container.foreground .frame-end .content .text-block .textbox-headline span:nth-child(2)::before{";
document.getElementById("frame2-2").innerHTML += "<br>";
document.getElementById("frame2-2").innerHTML +=
  "content:'" + string_Raw + "' !important;";
document.getElementById("frame2-2").innerHTML += "<br>";
document.getElementById("frame2-2").innerHTML += "white-space: pre !important;";
document.getElementById("frame2-2").innerHTML += "<br>";
document.getElementById("frame2-2").innerHTML += "}";

document.getElementById("frame2-3").innerHTML += "//Frame 2 Break";
document.getElementById("frame2-3").innerHTML += "<br>";
document.getElementById("frame2-3").innerHTML +=
  ".frame-container.foreground .frame-end .content .text-block .textbox-headline span:nth-child(3)::before{";
document.getElementById("frame2-3").innerHTML += "<br>";
document.getElementById("frame2-3").innerHTML +=
  "content:'" + string_Raw + "' !important;";
document.getElementById("frame2-3").innerHTML += "<br>";
document.getElementById("frame2-3").innerHTML += "white-space: pre !important;";
document.getElementById("frame2-3").innerHTML += "<br>";
document.getElementById("frame2-3").innerHTML += "}";

document.getElementById("frame2-4").innerHTML += "//Frame 2 Break";
document.getElementById("frame2-4").innerHTML += "<br>";
document.getElementById("frame2-4").innerHTML +=
  ".frame-container.foreground .frame-end .content .text-block .textbox-headline span:nth-child(4)::before{";
document.getElementById("frame2-4").innerHTML += "<br>";
document.getElementById("frame2-4").innerHTML +=
  "content:'" + string_Raw + "' !important;";
document.getElementById("frame2-4").innerHTML += "<br>";
document.getElementById("frame2-4").innerHTML += "white-space: pre !important;";
document.getElementById("frame2-4").innerHTML += "<br>";
document.getElementById("frame2-4").innerHTML += "}";

document.getElementById("frame2-5").innerHTML += "//Frame 2 Break";
document.getElementById("frame2-5").innerHTML += "<br>";
document.getElementById("frame2-5").innerHTML +=
  ".frame-container.foreground .frame-end .content .text-block .textbox-headline span:nth-child(5)::before{";
document.getElementById("frame2-5").innerHTML += "<br>";
document.getElementById("frame2-5").innerHTML +=
  "content:'" + string_Raw + "' !important;";
document.getElementById("frame2-5").innerHTML += "<br>";
document.getElementById("frame2-5").innerHTML += "white-space: pre !important;";
document.getElementById("frame2-5").innerHTML += "<br>";
document.getElementById("frame2-5").innerHTML += "}";

document.getElementById("frame2-6").innerHTML += "//Frame 2 Break";
document.getElementById("frame2-6").innerHTML += "<br>";
document.getElementById("frame2-6").innerHTML +=
  ".frame-container.foreground .frame-end .content .text-block .textbox-headline span:nth-child(6)::before{";
document.getElementById("frame2-6").innerHTML += "<br>";
document.getElementById("frame2-6").innerHTML +=
  "content:'" + string_Raw + "' !important;";
document.getElementById("frame2-6").innerHTML += "<br>";
document.getElementById("frame2-6").innerHTML += "white-space: pre !important;";
document.getElementById("frame2-6").innerHTML += "<br>";
document.getElementById("frame2-6").innerHTML += "}";

document.getElementById("frame2-7").innerHTML += "//Frame 2 Break";
document.getElementById("frame2-7").innerHTML += "<br>";
document.getElementById("frame2-7").innerHTML +=
  ".frame-container.foreground .frame-end .content .text-block .textbox-headline span:nth-child(7)::before{";
document.getElementById("frame2-7").innerHTML += "<br>";
document.getElementById("frame2-7").innerHTML +=
  "content:'" + string_Raw + "' !important;";
document.getElementById("frame2-7").innerHTML += "<br>";
document.getElementById("frame2-7").innerHTML += "white-space: pre !important;";
document.getElementById("frame2-7").innerHTML += "<br>";
document.getElementById("frame2-7").innerHTML += "}";

document.getElementById("frame2-8").innerHTML += "//Frame 2 Break";
document.getElementById("frame2-8").innerHTML += "<br>";
document.getElementById("frame2-8").innerHTML +=
  ".frame-container.foreground .frame-end .content .text-block .textbox-headline span:nth-child(8)::before{";
document.getElementById("frame2-8").innerHTML += "<br>";
document.getElementById("frame2-8").innerHTML +=
  "content:'" + string_Raw + "' !important;";
document.getElementById("frame2-8").innerHTML += "<br>";
document.getElementById("frame2-8").innerHTML += "white-space: pre !important;";
document.getElementById("frame2-8").innerHTML += "<br>";
document.getElementById("frame2-8").innerHTML += "}";

document.getElementById("frame2-9").innerHTML += "//Frame 2 Break";
document.getElementById("frame2-9").innerHTML += "<br>";
document.getElementById("frame2-9").innerHTML +=
  ".frame-container.foreground .frame-end .content .text-block .textbox-headline span:nth-child(9)::before{";
document.getElementById("frame2-9").innerHTML += "<br>";
document.getElementById("frame2-9").innerHTML +=
  "content:'" + string_Raw + "' !important;";
document.getElementById("frame2-9").innerHTML += "<br>";
document.getElementById("frame2-9").innerHTML += "white-space: pre !important;";
document.getElementById("frame2-9").innerHTML += "<br>";
document.getElementById("frame2-9").innerHTML += "}";

document.getElementById("frame2-10").innerHTML += "//Frame 2 Break";
document.getElementById("frame2-10").innerHTML += "<br>";
document.getElementById("frame2-10").innerHTML +=
  ".frame-container.foreground .frame-end .content .text-block .textbox-headline span:nth-child(10)::before{";
document.getElementById("frame2-10").innerHTML += "<br>";
document.getElementById("frame2-10").innerHTML +=
  "content:'" + string_Raw + "' !important;";
document.getElementById("frame2-10").innerHTML += "<br>";
document.getElementById("frame2-10").innerHTML +=
  "white-space: pre !important;";
document.getElementById("frame2-10").innerHTML += "<br>";
document.getElementById("frame2-10").innerHTML += "}";

//vnext frame breaks

document.getElementById("vnext-frame1-2").innerHTML += "//Frame 1 Break";
document.getElementById("vnext-frame1-2").innerHTML += "<br>";
document.getElementById("vnext-frame1-2").innerHTML +=
  ".layer--text-1 .text--1 span:nth-child(2)::before{";
document.getElementById("vnext-frame1-2").innerHTML += "<br>";
document.getElementById("vnext-frame1-2").innerHTML +=
  "content:'" + string_Raw + "' !important;";
document.getElementById("vnext-frame1-2").innerHTML += "<br>";
document.getElementById("vnext-frame1-2").innerHTML +=
  "white-space: pre !important;";
document.getElementById("vnext-frame1-2").innerHTML += "<br>";
document.getElementById("vnext-frame1-2").innerHTML += "}";

document.getElementById("vnext-frame1-3").innerHTML += "//Frame 1 Break";
document.getElementById("vnext-frame1-3").innerHTML += "<br>";
document.getElementById("vnext-frame1-3").innerHTML +=
  ".layer--text-1 .text--1 span:nth-child(3)::before{";
document.getElementById("vnext-frame1-3").innerHTML += "<br>";
document.getElementById("vnext-frame1-3").innerHTML +=
  "content:'" + string_Raw + "' !important;";
document.getElementById("vnext-frame1-3").innerHTML += "<br>";
document.getElementById("vnext-frame1-3").innerHTML +=
  "white-space: pre !important;";
document.getElementById("vnext-frame1-3").innerHTML += "<br>";
document.getElementById("vnext-frame1-3").innerHTML += "}";

document.getElementById("vnext-frame1-4").innerHTML += "//Frame 1 Break";
document.getElementById("vnext-frame1-4").innerHTML += "<br>";
document.getElementById("vnext-frame1-4").innerHTML +=
  ".layer--text-1 .text--1 span:nth-child(4)::before{";
document.getElementById("vnext-frame1-4").innerHTML += "<br>";
document.getElementById("vnext-frame1-4").innerHTML +=
  "content:'" + string_Raw + "' !important;";
document.getElementById("vnext-frame1-4").innerHTML += "<br>";
document.getElementById("vnext-frame1-4").innerHTML +=
  "white-space: pre !important;";
document.getElementById("vnext-frame1-4").innerHTML += "<br>";
document.getElementById("vnext-frame1-4").innerHTML += "}";

document.getElementById("vnext-frame1-5").innerHTML += "//Frame 1 Break";
document.getElementById("vnext-frame1-5").innerHTML += "<br>";
document.getElementById("vnext-frame1-5").innerHTML +=
  ".layer--text-1 .text--1 span:nth-child(5)::before{";
document.getElementById("vnext-frame1-5").innerHTML += "<br>";
document.getElementById("vnext-frame1-5").innerHTML +=
  "content:'" + string_Raw + "' !important;";
document.getElementById("vnext-frame1-5").innerHTML += "<br>";
document.getElementById("vnext-frame1-5").innerHTML +=
  "white-space: pre !important;";
document.getElementById("vnext-frame1-5").innerHTML += "<br>";
document.getElementById("vnext-frame1-5").innerHTML += "}";

document.getElementById("vnext-frame1-6").innerHTML += "//Frame 1 Break";
document.getElementById("vnext-frame1-6").innerHTML += "<br>";
document.getElementById("vnext-frame1-6").innerHTML +=
  ".layer--text-1 .text--1 span:nth-child(6)::before{";
document.getElementById("vnext-frame1-6").innerHTML += "<br>";
document.getElementById("vnext-frame1-6").innerHTML +=
  "content:'" + string_Raw + "' !important;";
document.getElementById("vnext-frame1-6").innerHTML += "<br>";
document.getElementById("vnext-frame1-6").innerHTML +=
  "white-space: pre !important;";
document.getElementById("vnext-frame1-6").innerHTML += "<br>";
document.getElementById("vnext-frame1-6").innerHTML += "}";

document.getElementById("vnext-frame1-7").innerHTML += "//Frame 1 Break";
document.getElementById("vnext-frame1-7").innerHTML += "<br>";
document.getElementById("vnext-frame1-7").innerHTML +=
  ".layer--text-1 .text--1 span:nth-child(7)::before{";
document.getElementById("vnext-frame1-7").innerHTML += "<br>";
document.getElementById("vnext-frame1-7").innerHTML +=
  "content:'" + string_Raw + "' !important;";
document.getElementById("vnext-frame1-7").innerHTML += "<br>";
document.getElementById("vnext-frame1-7").innerHTML +=
  "white-space: pre !important;";
document.getElementById("vnext-frame1-7").innerHTML += "<br>";
document.getElementById("vnext-frame1-7").innerHTML += "}";

document.getElementById("vnext-frame1-8").innerHTML += "//Frame 1 Break";
document.getElementById("vnext-frame1-8").innerHTML += "<br>";
document.getElementById("vnext-frame1-8").innerHTML +=
  ".layer--text-1 .text--1 span:nth-child(8)::before{";
document.getElementById("vnext-frame1-8").innerHTML += "<br>";
document.getElementById("vnext-frame1-8").innerHTML +=
  "content:'" + string_Raw + "' !important;";
document.getElementById("vnext-frame1-8").innerHTML += "<br>";
document.getElementById("vnext-frame1-8").innerHTML +=
  "white-space: pre !important;";
document.getElementById("vnext-frame1-8").innerHTML += "<br>";
document.getElementById("vnext-frame1-8").innerHTML += "}";

document.getElementById("vnext-frame1-9").innerHTML += "//Frame 1 Break";
document.getElementById("vnext-frame1-9").innerHTML += "<br>";
document.getElementById("vnext-frame1-9").innerHTML +=
  ".layer--text-1 .text--1 span:nth-child(9)::before{";
document.getElementById("vnext-frame1-9").innerHTML += "<br>";
document.getElementById("vnext-frame1-9").innerHTML +=
  "content:'" + string_Raw + "' !important;";
document.getElementById("vnext-frame1-9").innerHTML += "<br>";
document.getElementById("vnext-frame1-9").innerHTML +=
  "white-space: pre !important;";
document.getElementById("vnext-frame1-9").innerHTML += "<br>";
document.getElementById("vnext-frame1-9").innerHTML += "}";

document.getElementById("vnext-frame1-10").innerHTML += "//Frame 1 Break";
document.getElementById("vnext-frame1-10").innerHTML += "<br>";
document.getElementById("vnext-frame1-10").innerHTML +=
  ".layer--text-1 .text--1 span:nth-child(10)::before{";
document.getElementById("vnext-frame1-10").innerHTML += "<br>";
document.getElementById("vnext-frame1-10").innerHTML +=
  "content:'" + string_Raw + "' !important;";
document.getElementById("vnext-frame1-10").innerHTML += "<br>";
document.getElementById("vnext-frame1-10").innerHTML +=
  "white-space: pre !important;";
document.getElementById("vnext-frame1-10").innerHTML += "<br>";
document.getElementById("vnext-frame1-10").innerHTML += "}";

//vnext frame 2

document.getElementById("vnext-frame2-2").innerHTML += "//Frame 2 Break";
document.getElementById("vnext-frame2-2").innerHTML += "<br>";
document.getElementById("vnext-frame2-2").innerHTML +=
  ".text--3A span:nth-child(2)::before{";
document.getElementById("vnext-frame2-2").innerHTML += "<br>";
document.getElementById("vnext-frame2-2").innerHTML +=
  "content:'" + string_Raw + "' !important;";
document.getElementById("vnext-frame2-2").innerHTML += "<br>";
document.getElementById("vnext-frame2-2").innerHTML +=
  "white-space: pre !important;";
document.getElementById("vnext-frame2-2").innerHTML += "<br>";
document.getElementById("vnext-frame2-2").innerHTML += "}";

document.getElementById("vnext-frame2-3").innerHTML += "//Frame 2 Break";
document.getElementById("vnext-frame2-3").innerHTML += "<br>";
document.getElementById("vnext-frame2-3").innerHTML +=
  ".text--3A span:nth-child(3)::before{";
document.getElementById("vnext-frame2-3").innerHTML += "<br>";
document.getElementById("vnext-frame2-3").innerHTML +=
  "content:'" + string_Raw + "' !important;";
document.getElementById("vnext-frame2-3").innerHTML += "<br>";
document.getElementById("vnext-frame2-3").innerHTML +=
  "white-space: pre !important;";
document.getElementById("vnext-frame2-3").innerHTML += "<br>";
document.getElementById("vnext-frame2-3").innerHTML += "}";

document.getElementById("vnext-frame2-4").innerHTML += "//Frame 2 Break";
document.getElementById("vnext-frame2-4").innerHTML += "<br>";
document.getElementById("vnext-frame2-4").innerHTML +=
  ".text--3A span:nth-child(4)::before{";
document.getElementById("vnext-frame2-4").innerHTML += "<br>";
document.getElementById("vnext-frame2-4").innerHTML +=
  "content:'" + string_Raw + "' !important;";
document.getElementById("vnext-frame2-4").innerHTML += "<br>";
document.getElementById("vnext-frame2-4").innerHTML +=
  "white-space: pre !important;";
document.getElementById("vnext-frame2-4").innerHTML += "<br>";
document.getElementById("vnext-frame2-4").innerHTML += "}";

document.getElementById("vnext-frame2-5").innerHTML += "//Frame 2 Break";
document.getElementById("vnext-frame2-5").innerHTML += "<br>";
document.getElementById("vnext-frame2-5").innerHTML +=
  ".text--3A span:nth-child(5)::before{";
document.getElementById("vnext-frame2-5").innerHTML += "<br>";
document.getElementById("vnext-frame2-5").innerHTML +=
  "content:'" + string_Raw + "' !important;";
document.getElementById("vnext-frame2-5").innerHTML += "<br>";
document.getElementById("vnext-frame2-5").innerHTML +=
  "white-space: pre !important;";
document.getElementById("vnext-frame2-5").innerHTML += "<br>";
document.getElementById("vnext-frame2-5").innerHTML += "}";

document.getElementById("vnext-frame2-6").innerHTML += "//Frame 2 Break";
document.getElementById("vnext-frame2-6").innerHTML += "<br>";
document.getElementById("vnext-frame2-6").innerHTML +=
  ".text--3A span:nth-child(6)::before{";
document.getElementById("vnext-frame2-6").innerHTML += "<br>";
document.getElementById("vnext-frame2-6").innerHTML +=
  "content:'" + string_Raw + "' !important;";
document.getElementById("vnext-frame2-6").innerHTML += "<br>";
document.getElementById("vnext-frame2-6").innerHTML +=
  "white-space: pre !important;";
document.getElementById("vnext-frame2-6").innerHTML += "<br>";
document.getElementById("vnext-frame2-6").innerHTML += "}";

document.getElementById("vnext-frame2-7").innerHTML += "//Frame 2 Break";
document.getElementById("vnext-frame2-7").innerHTML += "<br>";
document.getElementById("vnext-frame2-7").innerHTML +=
  ".text--3A span:nth-child(7)::before{";
document.getElementById("vnext-frame2-7").innerHTML += "<br>";
document.getElementById("vnext-frame2-7").innerHTML +=
  "content:'" + string_Raw + "' !important;";
document.getElementById("vnext-frame2-7").innerHTML += "<br>";
document.getElementById("vnext-frame2-7").innerHTML +=
  "white-space: pre !important;";
document.getElementById("vnext-frame2-7").innerHTML += "<br>";
document.getElementById("vnext-frame2-7").innerHTML += "}";

document.getElementById("vnext-frame2-8").innerHTML += "//Frame 2 Break";
document.getElementById("vnext-frame2-8").innerHTML += "<br>";
document.getElementById("vnext-frame2-8").innerHTML +=
  ".text--3A span:nth-child(8)::before{";
document.getElementById("vnext-frame2-8").innerHTML += "<br>";
document.getElementById("vnext-frame2-8").innerHTML +=
  "content:'" + string_Raw + "' !important;";
document.getElementById("vnext-frame2-8").innerHTML += "<br>";
document.getElementById("vnext-frame2-8").innerHTML +=
  "white-space: pre !important;";
document.getElementById("vnext-frame2-8").innerHTML += "<br>";
document.getElementById("vnext-frame2-8").innerHTML += "}";

document.getElementById("vnext-frame2-9").innerHTML += "//Frame 2 Break";
document.getElementById("vnext-frame2-9").innerHTML += "<br>";
document.getElementById("vnext-frame2-9").innerHTML +=
  ".text--3A span:nth-child(9)::before{";
document.getElementById("vnext-frame2-9").innerHTML += "<br>";
document.getElementById("vnext-frame2-9").innerHTML +=
  "content:'" + string_Raw + "' !important;";
document.getElementById("vnext-frame2-9").innerHTML += "<br>";
document.getElementById("vnext-frame2-9").innerHTML +=
  "white-space: pre !important;";
document.getElementById("vnext-frame2-9").innerHTML += "<br>";
document.getElementById("vnext-frame2-9").innerHTML += "}";

document.getElementById("vnext-frame2-10").innerHTML += "//Frame 2 Break";
document.getElementById("vnext-frame2-10").innerHTML += "<br>";
document.getElementById("vnext-frame2-10").innerHTML +=
  ".text--3A span:nth-child(10)::before{";
document.getElementById("vnext-frame2-10").innerHTML += "<br>";
document.getElementById("vnext-frame2-10").innerHTML +=
  "content:'" + string_Raw + "' !important;";
document.getElementById("vnext-frame2-10").innerHTML += "<br>";
document.getElementById("vnext-frame2-10").innerHTML +=
  "white-space: pre !important;";
document.getElementById("vnext-frame2-10").innerHTML += "<br>";
document.getElementById("vnext-frame2-10").innerHTML += "}";
