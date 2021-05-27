const container = document.querySelector("#containers");

const header = document.querySelector("header");
//////buttun select/////////
const aHome = document.createElement("a");
////////////label search//////////
let label = document.querySelector("label");
///////////////////create select////////////
const selectHeader = document.createElement("select");
// header.style.height = "50px";
const getPrprtyApiTv = async () => {
  try {
    // const getApi = await axios.get(
    //   "https://api.tvmaze.com/shows/22036/episodes"
    // );
    const getApi = await getApiProperty();
    // selectHeader.classList = "classSelect";
    // const optionFirst = document.createElement("option");
    // optionFirst.disabled = "disabled";
    // optionFirst.innerText = "please choose";
    // selectHeader.append(optionFirst);

    // console.log(getApi.data);

    selectHeader.style.width = "400px";
    selectHeader.style.height = "50px";
    selectHeader.style.backgroundColor = "#f9dcc4";
    selectHeader.style.borderRadius = "20px";
    // get element data //
    for (let element of getApi) {
      const divCart = document.createElement("div");
      ///////////////////////////////style cart /////// ///////////////////////////////////
      // divCart.style.backgroundColor = "#fec5bb";
      divCart.style.backgroundColor = "#fae1dd";

      divCart.style.width = "380px";
      divCart.style.height = "500px";
      divCart.style.margin = "20px";
      container.style.textAlign = "center";
      container.style.marginLeft = "10px";

      divCart.style.color = "#373a40";
      divCart.style.border = "1px solid #2a2c2e";
      divCart.style.borderRadius = "20px 0px";
      divCart.style.boxShadow = "8px 8px 2px 1px rgba(220, 210, 218, .7)";
      divCart.classList = "divCart";
      divCart.id = "divCa";
      ////////////////////////style Flex container////////////////////
      // container.style.display = "grid";
      // container.style.grid = "auto-flow dense / 3fr 3fr 3fr";
      container.style.display = "flex";
      container.style.flexDirection = "row";
      container.style.justifyContent = "space-around";
      container.style.flexWrap = "wrap";
      container.style.alignContent = "space-around";
      container.style.marginTop = "20px";
      ////////////////////////////////////////////////////////////////////
      //////////////////////////create 'H2', 'p',,,, style tag 'H2','P'/////////////////////
      const h2Titer = document.createElement("h2");
      const pCart = document.createElement("p");
      pCart.style.fontSize = "12px";
      pCart.style.color = "#2a2c2e";
      pCart.style.paddingLeft = "5px";
      pCart.style.paddingRight = "5px";
      h2Titer.style.textAlign = "center";
      h2Titer.classList = "h2forOption";
      ///////////////////////////'H2'=season , number , name //////////////////////////
      if (element.season >= 10) {
        h2Titer.innerHTML = `${element.name}-S${element.season}E0${element.number}`;
      } else if (element.number >= 10) {
        h2Titer.innerHTML = `${element.name}-S0${element.season}E${element.number}`;
      } else {
        h2Titer.innerHTML = `${element.name}-S0${element.season}E0${element.number}`;
      }
      h2Titer.value = `S0${element.season}E0${element.number}-${element.name}`;
      //////////////////////////////////////////////////////////////////////////////
      ///////////////////////////////////create image , style img////////////////////////////////
      const imageCart = document.createElement("img");

      imageCart.src = element.image.medium;
      imageCart.style.borderRadius = "5%";
      imageCart.style.border = "2px solid #f6f6f6";
      ///////////////////////////// 'P'= summary //////////////////////////////
      pCart.innerHTML = element.summary;

      //////////////////////////// div cart MouseOver And MouseOut ///////////////////////
      divCart.addEventListener("mouseover", () => {
        divCart.style.color = "#800e13";
        divCart.style.backgroundColor = "#ce796b";
        pCart.style.color = "#800e13";
        h2Titer.style.fontWeight = "bold";
        pCart.style.fontWeight = "bold";
        pCart.classList = "tagP";
        divCart.style.height = "530px";
        divCart.style.transform = " translate(10px, 5%)";
        h2Titer.style.backgroundColor = "white";
        h2Titer.style.fontSize = "30px";
        pCart.style.fontSize = "12px";
      });
      divCart.addEventListener("mouseout", () => {
        divCart.style.backgroundColor = "#fae1dd";
        h2Titer.style.backgroundColor = "#fae1dd";
        divCart.style.color = "#373a40";
        pCart.style.color = "#373a40";
        divCart.style.transform = " translate(0px, 0%)";
        h2Titer.style.fontSize = "25px";
        divCart.style.height = "500px";
        pCart.style.fontSize = "11px";
      });
      //////////////////////////////////////////// append the divCart //////////////////////////
      divCart.append(h2Titer);
      divCart.append(imageCart);
      divCart.append(pCart);
      container.append(divCart);
      //////////////////////////////////////// create Option and option= season,numbet,name //////////////////////////

      const selectOption = document.createElement("option");
      if (element.season >= 10) {
        selectOption.innerHTML = `S0${element.season}E0${element.number}-${element.name}`;
      } else if (element.number >= 10) {
        selectOption.innerHTML = `S${element.season}E${element.number}-${element.name}`;
      } else {
        selectOption.innerHTML = `S0${element.season}E0${element.number}-${element.name}`;
      }
      selectOption.classList = "classOption";
      selectHeader.append(selectOption);
    }
    /////////////////////////////style header and select///////////////////////
    // header.style.display = "flex";
    // // header.style.flexDirection = "row";
    // header.style.justifyContent = "space-between";
    // header.style.flexWrap = "warp";

    selectHeader.style.height = "40px";
    selectHeader.style.textAlign = "center";
  } catch (e) {
    console.log("Error", e);
  }
};

getPrprtyApiTv();

//////////////////////////////////////////////search////////////////////////////////////////////

let divCartMain = document.getElementsByClassName("divCart");
const inputSearch = document.getElementById("idSearch");
header.append(label);
header.append(selectHeader);
header.append(aHome);
inputSearch.style.border = "1px solid #780116";
inputSearch.addEventListener("keyup", () => {
  let inputSrch = inputSearch.value.toLowerCase();
  let countener = 0;
  aHome.href = "https://imd-shirin-nazari-tv.netlify.app/";
  aHome.style.color = "#f8ffe5";
  for (let index = 0; index < divCartMain.length; index++) {
    let searchDiv = divCartMain[index].innerHTML
      .toLowerCase()
      .includes(inputSrch);
    // console.log(searchDiv.search(searchDiv));
    if (!searchDiv) {
      divCartMain[index].style.display = "none";
    } else {
      divCartMain[index].style.display = "block";
      countener++;
    }
    label.innerHTML = `Displaying ${countener} / ${divCartMain.length} episodes`;
  }
  label.style.backgroundColor = "#780116";
  label.style.color = "#ffffff";
  label.style.height = "30px";
  label.style.textAlign = "center";
  label.style.paddingTop = "10px";
  label.style.width = "250px";
});
inputSearch.style.width = "500px";
inputSearch.style.outline = "none";
////////////////////////////////////////////end search///////////////////////////////////////////////////
///////////////////////////////////////////select///////////////////////////////////////////////////////
let options = document.getElementsByClassName("classOption");
selectHeader.addEventListener("change", () => {
  let optionsSe = selectHeader.options[selectHeader.selectedIndex].text;
  aHome.href = "https://imd-shirin-nazari-tv.netlify.app/";
  aHome.style.color = "#f8ffe5";
  for (let index = 0; index < selectHeader.length; index++) {
    console.log(options[index].value);
    if (optionsSe === options[index].value) {
      divCartMain[index].style.display = "block";
    } else {
      divCartMain[index].style.display = "none";
    }
  }
});

//////////////////////////////////style Homeeeeeeeeeeee and header/////////////////////////////
aHome.innerHTML = "Home";
// header.style.textAlign = "center";
// header.style.margin = "20px";
inputSearch.style.height = "40px";
inputSearch.style.borderRadius = "50px";
header.style.padding = "20px";
aHome.style.background = "#ce796b";
aHome.style.width = "60px";
aHome.style.height = "40px";
aHome.style.textAlign = "center";
aHome.style.paddingTop = "15px";

aHome.style.borderRadius = "40%";
////////////////////////end code/////////////////////

///////////////////////////////////////////////////////API//////////////////////////////////////////////

function getApiProperty() {
  return [
    {
      id: 12907,
      url: "https://www.tvmaze.com/episodes/12907/the-wire-1x01-the-target",
      name: "The Target",
      season: 1,
      number: 1,
      type: "regular",
      airdate: "2002-06-02",
      airtime: "21:00",
      airstamp: "2002-06-03T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236937.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236937.jpg",
      },
      summary:
        "<p>Homicide detective Jimmy McNulty observes the murder trial of a mid-level drug dealer, D'Angelo Barksdale, and sees the prosecution's star witness recant her testimony. McNulty recognises drug king-pin Stringer Bell in the court room and believes he has manipulated the proceedings, so he circumvents the chain-of-command by talking to the judge, Daniel Phelan, who then places pressure on the police department to investigate the Barksdale drug-dealing organization, which, McNulty claims, has gotten away with ten murders in the last year. D'Angelo is welcomed home by his uncle, Barksdale patriarch, Avon, who is frustrated with him for placing himself in a situation where the police could charge him. Nevertheless, Avon allows him to return to work, but in what D'Angelo sees as a demotion, he is moved to a low-rise housing project known as \"the pit.\" Meanwhile, homeless drug addict Bubbles, acts as mentor to another addict, Johnny Weeks, in an ill-conceived scam with severe consequences.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12907",
        },
      },
    },
    {
      id: 12908,
      url: "https://www.tvmaze.com/episodes/12908/the-wire-1x02-the-detail",
      name: "The Detail",
      season: 1,
      number: 2,
      type: "regular",
      airdate: "2002-06-09",
      airtime: "21:00",
      airstamp: "2002-06-10T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236928.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236928.jpg",
      },
      summary:
        "<p>The witness who testified against D'Angelo is killed and the Barksdale organization is suspected. In light of Phelan's pressure, a detail is formed to investigate their activity in the towers and the pit. However, the detail's lieutenant, Cedric Daniels, is concerned with the quality of the team assigned by Deputy Ops. Ervin Burrell, while McNulty is concerned with the department's plan for the investigation, believing the approach of \"buy busts\" won't get them anywhere near the high-ranking members of the organization. The operation begins with Daniels' protégé Kima Greggs using Bubbles to identify who's who on the street. Meanwhile, McNulty and his partner, Bunk, try an unusual interrogation approach with D'Angelo, while Burrell tries to keep the death of the witness out of the press. Later, Daniels' suspicions about his team prove correct when an unauthorized late night foray into the towers by Herc, Carver and Prez goes awry.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12908",
        },
      },
    },
    {
      id: 12909,
      url: "https://www.tvmaze.com/episodes/12909/the-wire-1x03-the-buys",
      name: "The Buys",
      season: 1,
      number: 3,
      type: "regular",
      airdate: "2002-06-16",
      airtime: "21:00",
      airstamp: "2002-06-17T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236930.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236930.jpg",
      },
      summary:
        "<p>\"The king stay the king.\" - D'AngeloAfter early morning \"field interviews\" conducted by Herc, Carver and Prez lead to a minor riot and bad publicity for the police, Daniels gets called in by the Deputy Commissioner. McNulty sends Mahone and Polk to the terrace to get a photo of Avon Barksdale. They come up short but soft- spoken Freamon comes through with an old photo from Barksdale's boxing days. McNulty and Greggs visit FBI agent Fitzhugh to try and obtain some surveillance equipment. D'Angelo delivers the daily count to Stringer Bell who in turn, gives D'Angelo a bonus. Later, while Bodie and D'Angelo wait for the new supply to arrive, D'Angelo offers to get food. While he's gone Bodie, Stinkum and the crew go to retrieve the new supply only renegade dealer Omar and his crew get there and steal the drugs for themselves. The next day D'Angelo gets chewed out by Wee Bey -- a Barksdale enforcer -- for not being around when the incident happened. After getting chided by his superiors, Lieutenant Daniels mobilizes the team to raid \"The Pit\". Bodie hits one of the detectives while getting arrested and the rest of the officers proceed to beat Bodie. McNulty secretly meets with agent Fitzhugh who tells him to watch out for Lieutenant Daniels -- who might be on the take.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12909",
        },
      },
    },
    {
      id: 12910,
      url: "https://www.tvmaze.com/episodes/12910/the-wire-1x04-old-cases",
      name: "Old Cases",
      season: 1,
      number: 4,
      type: "regular",
      airdate: "2002-06-23",
      airtime: "21:00",
      airstamp: "2002-06-24T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/25/63545.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/25/63545.jpg",
      },
      summary:
        "<p>Bodie wakes up from his injuries in a Washington, D.C. juvenile detention center and manages to escape just before Herc and Carver arrive to interrogate him. Avon discusses the loss of the pit's stash with his enforcers and marks Omar and his crew for death. McNulty and his partner from homicide Bunk Moreland investigate an old murder that may be related to D'Angelo.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12910",
        },
      },
    },
    {
      id: 12911,
      url: "https://www.tvmaze.com/episodes/12911/the-wire-1x05-the-pager",
      name: "The Pager",
      season: 1,
      number: 5,
      type: "regular",
      airdate: "2002-06-30",
      airtime: "21:00",
      airstamp: "2002-07-01T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236932.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236932.jpg",
      },
      summary:
        "<p>Avon Barksdale Avon becomes more and more suspicious, he orders Wee-Bey to change phone lines in his apartment and promotes Stinkum to manage a new territory. He gets word that one of Omar's crew members has been \"got\". Stringer Bell warns D'Angelo that a snitch may be in his camp. The detectives get their affidavit approved for a cloned pager but they are puzzled when the numbers they receive are not regular Baltimore phone numbers.. Herc and Carver catch up with Bodie and attempt to interrogate him.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12911",
        },
      },
    },
    {
      id: 12912,
      url: "https://www.tvmaze.com/episodes/12912/the-wire-1x06-the-wire",
      name: "The Wire",
      season: 1,
      number: 6,
      type: "regular",
      airdate: "2002-07-07",
      airtime: "21:00",
      airstamp: "2002-07-08T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236933.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236933.jpg",
      },
      summary:
        "<p><i>\"...and all the pieces matter.\" - Freamon</i><br />Brandon's bloodied body is discovered in the pit. Wallace gets even more unsettled about the situation after Avon rewards him for his part in Brandon's murder. The detail gets a wiretap running. Daniels clashes with homicide MajorWilliam Rawlsover their approach to the evidence they have gathered thus far.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12912",
        },
      },
    },
    {
      id: 12913,
      url: "https://www.tvmaze.com/episodes/12913/the-wire-1x07-one-arrest",
      name: "One Arrest",
      season: 1,
      number: 7,
      type: "regular",
      airdate: "2002-07-21",
      airtime: "21:00",
      airstamp: "2002-07-22T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/51/128682.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/51/128682.jpg",
      },
      summary:
        '<p><i>"A man must have a code." - Bunk</i><br />Using information from the wiretap Detectives Greggs, Herc, Carver, andSydnorcatch a runner on his way to the pit with a re-supply. Avon worries about a possible snitch and Stringer confounds the detail\'s investigative efforts by cautiously instructing his people to stop using payphones. Rawls pressures his detective in the detail for information on their case.</p>',
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12913",
        },
      },
    },
    {
      id: 12914,
      url: "https://www.tvmaze.com/episodes/12914/the-wire-1x08-lessons",
      name: "Lessons",
      season: 1,
      number: 8,
      type: "regular",
      airdate: "2002-07-28",
      airtime: "21:00",
      airstamp: "2002-07-29T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/51/129301.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/51/129301.jpg",
      },
      summary:
        '<p><i>"Come at the king, you best not miss." - Omar</i><br />McNulty uses his children to tail Stringer after a chance encounter in a local market. Greggs and Carver arrest a driver picking up a large amount of cash from the Towers from known gang members, but are forced to return the money when the driver\'s political connections to Senator Clay Davis are revealed. Daniels discusses his problems following the money trail with his wife Marla.</p>',
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12914",
        },
      },
    },
    {
      id: 12915,
      url: "https://www.tvmaze.com/episodes/12915/the-wire-1x09-game-day",
      name: "Game Day",
      season: 1,
      number: 9,
      type: "regular",
      airdate: "2002-08-04",
      airtime: "21:00",
      airstamp: "2002-08-05T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/51/129304.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/51/129304.jpg",
      },
      summary:
        '<p><i>"Maybe we won." - Herc</i><br />Freamon gets Sydnor and Prez started on the Barksdale money trail. Omar gives East side kingpin Proposition Joe a stolen package for the opportunity to parley with him. Avon and Proposition Joe host an East side vs. West side basketball game, giving the detectives the first glimpse of their elusive target. Omar attempts to kill Avon, but is himself wounded.</p>',
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12915",
        },
      },
    },
    {
      id: 12917,
      url: "https://www.tvmaze.com/episodes/12917/the-wire-1x10-the-cost",
      name: "The Cost",
      season: 1,
      number: 10,
      type: "regular",
      airdate: "2002-08-11",
      airtime: "21:00",
      airstamp: "2002-08-12T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/51/129948.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/51/129948.jpg",
      },
      summary:
        '<p><i>"And then he dropped the bracelets..." - Greggs</i><br />After being clean for three days, Bubbles gets some strong advice from a former addict. Avon and Stringer tighten up ship following Omar\'s attempted hit on Avon. The detail identifies a major Barksdale stash house and an undercover operation has terrible consequences. Omar and Stringer Bell meet for a parley.</p>',
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12917",
        },
      },
    },
    {
      id: 12918,
      url: "https://www.tvmaze.com/episodes/12918/the-wire-1x11-the-hunt",
      name: "The Hunt",
      season: 1,
      number: 11,
      type: "regular",
      airdate: "2002-08-18",
      airtime: "21:00",
      airstamp: "2002-08-19T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/52/131487.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/52/131487.jpg",
      },
      summary:
        '<p><i>"Dope on the damn table." - Daniels</i><br />While Greggs\' life hangs in the balance, Daniels is ordered to raid the Barksdale operation. The detail\'s hand is forced and a series of city-wide raids and arrests are made to appease the Commissioner\'s desire for "dope on the table". Bubbles unwittingly implicates himself in the shooting.</p>',
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12918",
        },
      },
    },
    {
      id: 12919,
      url: "https://www.tvmaze.com/episodes/12919/the-wire-1x12-cleaning-up",
      name: "Cleaning Up",
      season: 1,
      number: 12,
      type: "regular",
      airdate: "2002-09-01",
      airtime: "21:00",
      airstamp: "2002-09-02T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/52/131495.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/52/131495.jpg",
      },
      summary:
        "<p><i>\"This is me, yo, right here.\" - Wallace</i><br />Avon and Stringer meet with their attorney,Maurice Levy, to discuss a potential leak in the wake of the raids. Wallace goes back to the pit and asks to be let back in but Stringer has another plan. With the loss of their wiretaps the detail takes a fresh approach and installs a camera in Avon's club. They catch Avon discussing a drug run with D'Angelo and arrest him en route.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12919",
        },
      },
    },
    {
      id: 12920,
      url: "https://www.tvmaze.com/episodes/12920/the-wire-1x13-sentencing",
      name: "Sentencing",
      season: 1,
      number: 13,
      type: "regular",
      airdate: "2002-09-08",
      airtime: "21:00",
      airstamp: "2002-09-09T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/52/132400.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/52/132400.jpg",
      },
      summary:
        "<p><i>\"all in the game...\" - Traditional, West Baltimore</i><br />Daniels and McNulty's evidence of political corruption is of slight interest to the FBI, but the unit decides not to turn over the case to the FBI, but to pursue other directions, so that those involved in the drug trade are arrested or taken off the street. Daniels and McNulty face the ire of their superiors for flouting orders for a quick resolution to the case. D'Angelo is convinced to stand with his family after a visit from his mother. The detail has enough information to arrest Avon and many of his people but Stringer is left on the street. Business resumes in the pit with Bodie and Poot leading the way.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12920",
        },
      },
    },
    {
      id: 12921,
      url: "https://www.tvmaze.com/episodes/12921/the-wire-2x01-ebb-tide",
      name: "Ebb Tide",
      season: 2,
      number: 1,
      type: "regular",
      airdate: "2003-06-01",
      airtime: "21:00",
      airstamp: "2003-06-02T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236941.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236941.jpg",
      },
      summary:
        '<p><i>"Ain\'t never gonna be what it was." – Little Big Roy</i><br />Jimmy McNulty is sidelined to harbor patrol. He discovers a corpse in the harbor and pays back Colonel Rawls by proving City Homicide bear responsibility for the investigation.Major Valchek feels slighted when the boss of a local stevedore union named Frank Sobotka donates a more impressive gift to a local Polish church. Sobotka meets with other union leaders and learns that a crucial pier is still in a state of disrepair. Sobotka instructs his nephew Nick to see The Greek regarding payment for a clandestine container that he is smuggling through the port. Later, Port Police Officer "Beadie" Russell stumbles across The Greek\'s container and discovers the bodies of over a dozen young women inside.</p>',
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12921",
        },
      },
    },
    {
      id: 12922,
      url: "https://www.tvmaze.com/episodes/12922/the-wire-2x02-collateral-damage",
      name: "Collateral Damage",
      season: 2,
      number: 2,
      type: "regular",
      airdate: "2003-06-08",
      airtime: "21:00",
      airstamp: "2003-06-09T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236942.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236942.jpg",
      },
      summary:
        "<p><i>\"They can chew you up, but they gotta spit you out.\" – McNulty</i><br />Officer Russell is assigned the murders of the thirteen women discovered in the cargo container. McNulty offers to help and again ensures that the case goes back to Rawls' homicide department. Valchek strikes a deal with Acting Commissioner Burrell—in return for supporting Burrell in his aspirations for promotion, Valchek demands Burrell set up a detail to investigate Sobotka and his union. Sobotka, angry at not being informed of the container's contents, considers cutting his ties with The Greek and demands a meeting. \"Horseface\"complains of sudden police pressure to Sobotka and the two come up with a plan to further embarrass Valchek. In prison, Avon Barksdale's relationship with his nephew D'Angelo begins to sour. Bodie Broadus finds that the new shipment of drugs for the Barksdale Organization is missing.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12922",
        },
      },
    },
    {
      id: 12923,
      url: "https://www.tvmaze.com/episodes/12923/the-wire-2x03-hot-shots",
      name: "Hot Shots",
      season: 2,
      number: 3,
      type: "regular",
      airdate: "2003-06-15",
      airtime: "21:00",
      airstamp: "2003-06-16T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236943.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236943.jpg",
      },
      summary:
        "<p><i>\"What they need is a union.\" – Russell</i><br />Nick is concerned over how he is to provide for his girlfriend and their daughter. He joins his errant cousin Ziggy and other dock workers to steal containers for Spiros Vondas and The Greek. Avon confers with Stringer Bell about troubles with their drug supply and D'Angelo's growing distance. Frank Sobotka attempts to court political favor in order to fulfill his hopes for the regeneration of the docks.Omar Little signs up some new partners in crime. At the request of Wee-Bey, Avon deals with an abusive prison officer who also deals drugs to inmates. His methods horrify D'Angelo.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12923",
        },
      },
    },
    {
      id: 12924,
      url: "https://www.tvmaze.com/episodes/12924/the-wire-2x04-hard-cases",
      name: "Hard Cases",
      season: 2,
      number: 4,
      type: "regular",
      airdate: "2003-06-22",
      airtime: "21:00",
      airstamp: "2003-06-23T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236944.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236944.jpg",
      },
      summary:
        "<p><i>\"If I hear the music, I'm gonna dance.\" – Greggs</i><br />D'Angelo confronts Avon about the bad package and washes his hands of the business. Avon brokers a deal to give up the prison officer for a reduction in his sentence. Valchek specifically requests Lieutenant Daniels for the Sobotka investigation. Daniels negotiates with Burrell and secures the promise of his own major crimes unit after the Sobotka investigation ends. Sobotka chastises his son and nephew about their unauthorized smuggling deal with the Greeks; he defends his own illicit deals as a means toward regenerating the ailing dockyard. Ziggy continues to enjoy his new-found wealth. McNulty takes a personal interest in the murdered women and is pressured to find Omar for Bunk Moreland.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12924",
        },
      },
    },
    {
      id: 12925,
      url: "https://www.tvmaze.com/episodes/12925/the-wire-2x05-undertow",
      name: "Undertow",
      season: 2,
      number: 5,
      type: "regular",
      airdate: "2003-06-29",
      airtime: "21:00",
      airstamp: "2003-06-30T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236945.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236945.jpg",
      },
      summary:
        "<p><i>\"They used to make steel there, no?\" – Spiros Vondas</i><br />Ziggy's inability to move a package of drugs costs him his Camaro and nearly his life as he falls foul of East side dealers. Seeing his cousin in danger, Nick attempts to parley with one of the dealers but discovers that they have torched Ziggy's car. Daniels sends his detail out for some hand-to-hands as they half-heartedly step up their investigation of the docks. Officer Russell gets information from an old boyfriend who indicates that the union computer may be useful in tracking containers. Sobotka's frustration with the Greeks begins to grow as he is once again denied a meeting with their boss, remaining defiant even when his payment for smuggling each container is tripled. Donette visits D'Angelo and tells him that he is being supported; D'Angelo remains cynical. The Barksdale family's drug trade continues to falter because of supply problems.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12925",
        },
      },
    },
    {
      id: 12926,
      url: "https://www.tvmaze.com/episodes/12926/the-wire-2x06-all-prologue",
      name: "All Prologue",
      season: 2,
      number: 6,
      type: "regular",
      airdate: "2003-07-06",
      airtime: "21:00",
      airstamp: "2003-07-07T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236946.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236946.jpg",
      },
      summary:
        "<p><i>\"It don't matter that some fool say he different...\" – D'Angelo</i><br />The detail continues to look for the source of the union's money and begin to monitor container movements.Detective Greggs tracks down a lead on the murdered girls. Stringer, concerned over D'Angelo's distancing from the organization, goes behind Avon's back to deal with the problem once and for all. Nick requests help from the Greeks to solve Ziggy's problems. As Sobotka outlines his plans for the docks, several of his union colleagues express suspicion at the source of his income. Omar emerges from hiding to testify against Bird.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12926",
        },
      },
    },
    {
      id: 12927,
      url: "https://www.tvmaze.com/episodes/12927/the-wire-2x07-backwash",
      name: "Backwash",
      season: 2,
      number: 7,
      type: "regular",
      airdate: "2003-07-13",
      airtime: "21:00",
      airstamp: "2003-07-14T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236947.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236947.jpg",
      },
      summary:
        "<p><i>\"Don't worry, kid. You're still on the clock.\" – Horseface</i><br />Rawls attempts to persuade Daniels to take the Jane Doe homicides but is unsuccessful.Lester Freamon and Russell continue to study the docks' traffic using their cloned computer, and suspect irregularities in containers handled by \"Horseface\". They track a container back to the Greeks' warehouse. They watch the warehouse and see Sergei Malatov meeting with Proposition Joe. Stringer discusses a business deal with Proposition Joe to revitalize the Barksdale organization, but Avon turns it down flat. D'Angelo's funeral brings together the Barksdale Organization.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12927",
        },
      },
    },
    {
      id: 12928,
      url: "https://www.tvmaze.com/episodes/12928/the-wire-2x08-duck-and-cover",
      name: "Duck and Cover",
      season: 2,
      number: 8,
      type: "regular",
      airdate: "2003-07-27",
      airtime: "21:00",
      airstamp: "2003-07-28T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236948.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236948.jpg",
      },
      summary:
        "<p><i>\"How come they don't fly away?\" – Ziggy</i><br />McNulty deals with the disappointment of his failed reconciliation with his wife by returning to his old drinking and womanizing habits while falling further into depression. The detail closes in on Sergei Malatov when they track his cell phone through his truck rental paperwork. Concerned about the union's finances, Sobotka decides to pay the bills and discovers that his cell phone account was flagged so as to not have service disconnected. Becoming paranoid, he smuggles a container without contraband to see the results, and his suspicions solidify when the police pull the container over. Frank and Nick visit the diner to meet with The Greek; The Greek tells him to deliver more disappeared but clean containers to the shut down warehouse as suspicions mount about possible interest from the police. With his business faltering, Bodie moves his crew into new territory.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12928",
        },
      },
    },
    {
      id: 12929,
      url: "https://www.tvmaze.com/episodes/12929/the-wire-2x09-stray-rounds",
      name: "Stray Rounds",
      season: 2,
      number: 9,
      type: "regular",
      airdate: "2003-08-03",
      airtime: "21:00",
      airstamp: "2003-08-04T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236949.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236949.jpg",
      },
      summary:
        "<p><i>\"The world is a smaller place now.\" – The Greek</i><br />The detail is dismayed at the lack of activity from their subjects and realizes that they must be changing their operating procedure. Nick moves higher in the underworld when Vondas allows him to wholesale drugs on their behalf. On the new drug corner they commandeered from their rivals Bodie and crew are involved in a shootout that kills a child. Rawls greets Major Howard \"Bunny\" Colvin at the scene of the shooting; Colvin disapproves of Rawls' counter-strategy of large-scale strike operations through the Western District. Stringer meets with Proposition Joe behind Avon's back to discuss turning over some West side territory in exchange for a cut of the Greeks' drugs. Avon complicates Stringer's attempted betrayal by hiring feared hit man Brother Mouzone to drive off rival dealers.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12929",
        },
      },
    },
    {
      id: 12930,
      url: "https://www.tvmaze.com/episodes/12930/the-wire-2x10-storm-warnings",
      name: "Storm Warnings",
      season: 2,
      number: 10,
      type: "regular",
      airdate: "2003-08-10",
      airtime: "21:00",
      airstamp: "2003-08-11T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236950.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236950.jpg",
      },
      summary:
        "<p><i>\"It pays to go with the union card every time.\" – Ziggy</i><br />Ethnic tension over the next union secretary continues to build; Sobotka still plans to run contrary to a long-standing gentlemen's agreement. Ziggy steals four new cars from the docks and fences three to Glekas who double-crosses Ziggy by halving his original cut. Ziggy in a rage shoots a young Greek employee and kills Glekas. He remains outside the warehouse to turn himself in. Nick is the first to learn of his cousin's arrest and after facing the wrath of his uncle, drowns his sorrows in a local park. The detail uses satellite technology to its advantage but meets a setback as Valchek turns over control of the investigation to the FBI. Bodie is pleased with the new supply of drugs, but unhappy that Proposition Joe's nephew Cheese is on his turf. Cheese is wounded by Brother Mouzone, further complicating relations between Stringer and Proposition Joe.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12930",
        },
      },
    },
    {
      id: 12931,
      url: "https://www.tvmaze.com/episodes/12931/the-wire-2x11-bad-dreams",
      name: "Bad Dreams",
      season: 2,
      number: 11,
      type: "regular",
      airdate: "2003-08-17",
      airtime: "21:00",
      airstamp: "2003-08-18T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236951.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236951.jpg",
      },
      summary:
        "<p><i>\"I need to get clean.\" – Sobotka</i><br />Stringer manipulates Omar into pursuing Brother Mouzone. Omar shoots Mouzone and then leaves him alive having realized his mistake. The detail serves warrants on the targets of their investigation. A raid of Nick's home turns up large amounts of cash and heroin but Nick himself escapes arrest. Frank Sobotka is arrested when the FBI storms the union offices. Valchek ensures the press is there to see Sobotka embarrassed in a perp walk. Sobotka agrees to work with the investigation into the Greeks in exchange for leniency for Nick and Ziggy. In the wake of the arrests the Greeks decide to cut their losses and leave Baltimore. Vondas lures Sobotka into danger by offering him a meeting with The Greek and a promise to help Nick and Ziggy. The Greek receives warning of Sobotka's plan from a contact in the FBI.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12931",
        },
      },
    },
    {
      id: 12932,
      url: "https://www.tvmaze.com/episodes/12932/the-wire-2x12-port-in-a-storm",
      name: "Port in a Storm",
      season: 2,
      number: 12,
      type: "regular",
      airdate: "2003-08-24",
      airtime: "21:00",
      airstamp: "2003-08-25T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236952.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236952.jpg",
      },
      summary:
        '<p><i>"Business. Always business." – The Greek</i><br />The stevedores gather for work as a floating corpse is pulled from the water. Once it is ashore, they all recognize the body as Frank Sobotka. The Greek opts to stop pursuing Nick because the police are on his heels, and walks away from Baltimore. The FBI visits the union hall and tells them that they need to change their leadership or face decertification. The union remains loyal and seals the destruction of their future. Urban reform begins to hit Baltimore as the docks undergo construction. Omar vows revenge against Stringer. Stringer cements his deal with Proposition Joe now that Mouzone is out of the way. Bubblesis arrested and alerts Greggs and McNulty to the relationship between Proposition Joe and Stringer Bell in exchange for his release.</p>',
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12932",
        },
      },
    },
    {
      id: 12933,
      url: "https://www.tvmaze.com/episodes/12933/the-wire-3x01-time-after-time",
      name: "Time After Time",
      season: 3,
      number: 1,
      type: "regular",
      airdate: "2004-09-19",
      airtime: "21:00",
      airstamp: "2004-09-20T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236956.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236956.jpg",
      },
      summary:
        "<p>After the notorious Franklin Terrace public housing towers are razed, the Barksdale drug crew searches for a new home on the streets of West Baltimore. McNulty and the detail look to make a case against Stringer Bell with a wiretap on a drug ring run by his ally, Proposition Joe. Daniels' promotion is derailed by City Hall due to his estranged wife's political ambitions.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12933",
        },
      },
    },
    {
      id: 12934,
      url: "https://www.tvmaze.com/episodes/12934/the-wire-3x02-all-due-respect",
      name: "All Due Respect",
      season: 3,
      number: 2,
      type: "regular",
      airdate: "2004-09-26",
      airtime: "21:00",
      airstamp: "2004-09-27T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236957.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236957.jpg",
      },
      summary:
        "<p>Omar continues his bold strikes on the heavily guarded Barksdale stash houses. McNulty launches his own investigation into last year's prison suicide of D'Angelo Barksdale. On the streets the bloodbath continues, prompting Burrell and Rawls to jack up the heat on their district commanders. The street violence also presents Daniels with a tough decision. A beleaguered Cutty tries to get his life back on track.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12934",
        },
      },
    },
    {
      id: 12935,
      url: "https://www.tvmaze.com/episodes/12935/the-wire-3x03-dead-soldiers",
      name: "Dead Soldiers",
      season: 3,
      number: 3,
      type: "regular",
      airdate: "2004-10-03",
      airtime: "21:00",
      airstamp: "2004-10-04T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236958.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236958.jpg",
      },
      summary:
        "<p>The brutality at police headquarters continues over the perceived failure of department commanders to rein in the city's crime stats. Another hit by Omar on the Barksdale stash houses goes horribly wrong. Proposition Joe summons Stringer Bell to a meeting and tells him that the cops have screwed up. Daniels reassigns his detail after the wire on Stringer Bell goes dead.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12935",
        },
      },
    },
    {
      id: 12936,
      url: "https://www.tvmaze.com/episodes/12936/the-wire-3x04-hamsterdam",
      name: "Hamsterdam",
      season: 3,
      number: 4,
      type: "regular",
      airdate: "2004-10-10",
      airtime: "21:00",
      airstamp: "2004-10-11T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236959.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236959.jpg",
      },
      summary:
        "<p>Greggs and McNulty recruit Bubbles to gather street intelligence on the Barksdale gang. Cutty seeks out the Barksdale gang after he loses his taste for the straight life. Bunk feels the pressure to find Dozerman's gun. Daniels worries that Avon Barksdale, having cut a prison deal, will be paroled. Stringer Bell tries to make amends with Donette.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12936",
        },
      },
    },
    {
      id: 12937,
      url: "https://www.tvmaze.com/episodes/12937/the-wire-3x05-straight-and-true",
      name: "Straight and True",
      season: 3,
      number: 5,
      type: "regular",
      airdate: "2004-10-17",
      airtime: "21:00",
      airstamp: "2004-10-18T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236960.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236960.jpg",
      },
      summary:
        "<p>Johnny pressures Bubbles to stop snitching for the detail. Cutty lies to his grandmother about going straight. McNulty realizes pursuing Barksdale and Bell is a losing cause, so he turns his attention to nailing Kintel Williamson. Colvin's free drug dealing zone, now known in the streets as Hamsterdam, scores a small victory. Avon Barksdale emerges from prison to a warm welcome from Stringer Bell.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12937",
        },
      },
    },
    {
      id: 12938,
      url: "https://www.tvmaze.com/episodes/12938/the-wire-3x06-homecoming",
      name: "Homecoming",
      season: 3,
      number: 6,
      type: "regular",
      airdate: "2004-10-31",
      airtime: "21:00",
      airstamp: "2004-11-01T02:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236961.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236961.jpg",
      },
      summary:
        "<p>Major Colvin instructs his men to use brute force to get the message out to street dealers about his free zone. Avon Barksdale and Stringer Bell discover that real estate development has its own pitfalls. McNulty and Greggs ask Daniels to let them renew the Bell and Barksdale investigation. On Barksdale's orders, Cutty plans to take back corners from Marlo's crew.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12938",
        },
      },
    },
    {
      id: 12939,
      url: "https://www.tvmaze.com/episodes/12939/the-wire-3x07-back-burners",
      name: "Back Burners",
      season: 3,
      number: 7,
      type: "regular",
      airdate: "2004-11-07",
      airtime: "21:00",
      airstamp: "2004-11-08T02:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236962.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236962.jpg",
      },
      summary:
        "<p>Daniels goes ballistic when the detail gets reassigned to the Western District. Stringer Bell learns from Donette that Brianna is thinking about talking to McNulty. Bunk receives a gift wrapped surprise. A single cell phone allows Freamon to begin mapping out a communications network for the Barksdale organization. Marlo dispatches a drive-by on a Barksdale drug corner.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12939",
        },
      },
    },
    {
      id: 12940,
      url: "https://www.tvmaze.com/episodes/12940/the-wire-3x08-moral-midgetry",
      name: "Moral Midgetry",
      season: 3,
      number: 8,
      type: "regular",
      airdate: "2004-11-14",
      airtime: "21:00",
      airstamp: "2004-11-15T02:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236963.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236963.jpg",
      },
      summary:
        "<p>Prez impresses the detail with what he's found out from Bodie's cell phone, information that sends McNulty and Greggs on a road trip. Colvin sees the benefits of his plan working. Carcetti confronts a hurdle he must clear if he wants to run for higher office, while Marlo appears to take the bait set by the Barksdale crew.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12940",
        },
      },
    },
    {
      id: 12941,
      url: "https://www.tvmaze.com/episodes/12941/the-wire-3x09-slapstick",
      name: "Slapstick",
      season: 3,
      number: 9,
      type: "regular",
      airdate: "2004-11-21",
      airtime: "21:00",
      airstamp: "2004-11-22T02:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236964.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236964.jpg",
      },
      summary:
        "<p>Responding to an officer's call for help, McNulty and Prez turn up the wrong alley with unanticipated results. Cutty is surprised to find help from within Baltimore's power structure for his proposed boxing gym. Omar decides to go it alone against Avon Barksdale and Stringer Bell. Bubbles is wired up and sent into Amsterdam</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12941",
        },
      },
    },
    {
      id: 12942,
      url: "https://www.tvmaze.com/episodes/12942/the-wire-3x10-reformation",
      name: "Reformation",
      season: 3,
      number: 10,
      type: "regular",
      airdate: "2004-11-28",
      airtime: "21:00",
      airstamp: "2004-11-29T02:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236965.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236965.jpg",
      },
      summary:
        "<p>Brother Mouzone returns to Baltimore on a mission of revenge and casts a wide net in his search for Omar. Colvin manages to put off a Sun reporter inquiring about Amsterdam. Pearlman and Daniels plead their case for a new kind of wiretap. Stringer Bell falls out of the loop with Avon Barksdale, while Marlo raises the stakes against the Barksdale gang.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12942",
        },
      },
    },
    {
      id: 12943,
      url: "https://www.tvmaze.com/episodes/12943/the-wire-3x11-middle-ground",
      name: "Middle Ground",
      season: 3,
      number: 11,
      type: "regular",
      airdate: "2004-12-12",
      airtime: "21:00",
      airstamp: "2004-12-13T02:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236966.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236966.jpg",
      },
      summary:
        "<p>The wire begins to yield information about the Barksdale organization. Stringer and Avon reminisce on how far they have come. McNulty finds the way to a key piece of the puzzle in an unlikely place. Awaiting his fate, Colvin works behind the scenes to shape the outcome of Amsterdam, while protecting his men from possible repercussions. Bubbles considers a new partner.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12943",
        },
      },
    },
    {
      id: 12944,
      url: "https://www.tvmaze.com/episodes/12944/the-wire-3x12-mission-accomplished",
      name: "Mission Accomplished",
      season: 3,
      number: 12,
      type: "regular",
      airdate: "2004-12-19",
      airtime: "21:00",
      airstamp: "2004-12-20T02:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236967.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236967.jpg",
      },
      summary:
        "<p>Avon readies his troops for a seemingly endless war against Marlo. The detail works towards the top rungs of the Barksdale organization with the information garnered from the wire. While Royce continues to grapple with Amsterdam, Burrell offers a deal to minimize the fallout. Carcetti's political plans become obvious to his friend and fellow councilman Tony Gray. Bubbles offers his view of the world. McNulty changes tack.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12944",
        },
      },
    },
    {
      id: 12945,
      url: "https://www.tvmaze.com/episodes/12945/the-wire-4x01-boys-of-summer",
      name: "Boys of Summer",
      season: 4,
      number: 1,
      type: "regular",
      airdate: "2006-09-10",
      airtime: "21:00",
      airstamp: "2006-09-11T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236973.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236973.jpg",
      },
      summary:
        "<p>In the Season Four premiere, four boys from West Baltimore play out their summer vacation in the streets. Meanwhile, Marlo has solved the problem that baffled Stringer Bell: how to maintain discipline--read: murders--without getting police attention.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12945",
        },
      },
    },
    {
      id: 12946,
      url: "https://www.tvmaze.com/episodes/12946/the-wire-4x02-soft-eyes",
      name: "Soft Eyes",
      season: 4,
      number: 2,
      type: "regular",
      airdate: "2006-09-17",
      airtime: "21:00",
      airstamp: "2006-09-18T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236974.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236974.jpg",
      },
      summary:
        "<p>Herc's soft-duty job with the mayor takes an unexpectedly hard turn. Despite the potential damage to her career, Pearlman provides Freamon and Sydnor with subpoena ammunition for their 'grizzly bear' hunt in City Hall.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12946",
        },
      },
    },
    {
      id: 12947,
      url: "https://www.tvmaze.com/episodes/12947/the-wire-4x03-home-room",
      name: "Home Room",
      season: 4,
      number: 3,
      type: "regular",
      airdate: "2006-09-24",
      airtime: "21:00",
      airstamp: "2006-09-25T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236975.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236975.jpg",
      },
      summary:
        "<p>With his lead dwindling, Royce resorts to extreme measures to stall Carcetti's momentum. At Bodie's corner, Michael proves adept as a runner, with Bodie and Marlo taking notice. A re-up bodega is put under surveillance by Omar and Greggs.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12947",
        },
      },
    },
    {
      id: 12948,
      url: "https://www.tvmaze.com/episodes/12948/the-wire-4x04-refugees",
      name: "Refugees",
      season: 4,
      number: 4,
      type: "regular",
      airdate: "2006-10-01",
      airtime: "21:00",
      airstamp: "2006-10-02T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236976.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236976.jpg",
      },
      summary:
        "<p>With Freamon and Greggs moved to Homicide, Herc and Dozerman join Marimow in the stripped-down Major Crimes Unit. Cutty gets a 'custodial' job at Tilghman School mopping up truants, but can't make headway in his efforts to mentor Michael.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12948",
        },
      },
    },
    {
      id: 12949,
      url: "https://www.tvmaze.com/episodes/12949/the-wire-4x05-alliances",
      name: "Alliances",
      season: 4,
      number: 5,
      type: "regular",
      airdate: "2006-10-08",
      airtime: "21:00",
      airstamp: "2006-10-09T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236977.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236977.jpg",
      },
      summary:
        '<p>The ensuing negative attention turns Royce against Burrell, who takes the heat while Rawls comes to the rescue. At school, Prez\'s reward/punishment program meets with mixed results, and Colvin looks to restore order by separating disruptive "corner" kids from more attentive "stoop" ones. Chris tries to enlist Michael into Marlo\'s ranks, spooking Randy along the way. Dukie debunks Randy\'s "special dead" theory.</p>',
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12949",
        },
      },
    },
    {
      id: 12951,
      url: "https://www.tvmaze.com/episodes/12951/the-wire-4x06-margin-of-error",
      name: "Margin of Error",
      season: 4,
      number: 6,
      type: "regular",
      airdate: "2006-10-15",
      airtime: "21:00",
      airstamp: "2006-10-16T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236978.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236978.jpg",
      },
      summary:
        "<p>With Election Day approaching, the three mayoral candidates make last-minute appeals. Carcetti wrangles for votes as he responds to a potentially devastating smear. Norris and Greggs get a lead on the Braddock case, but end up being detoured.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12951",
        },
      },
    },
    {
      id: 12952,
      url: "https://www.tvmaze.com/episodes/12952/the-wire-4x07-unto-others",
      name: "Unto Others",
      season: 4,
      number: 7,
      type: "regular",
      airdate: "2006-10-29",
      airtime: "21:00",
      airstamp: "2006-10-30T02:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236979.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236979.jpg",
      },
      summary:
        "<p>With a bounty on him, Omar calls in a favor to Bunk. The election over, Royce and Carcetti make peace and contemplate their futures. At school, Prez tricks his students into learning math. Finally, Greggs uses 'soft eyes' at a crime scene.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12952",
        },
      },
    },
    {
      id: 12953,
      url: "https://www.tvmaze.com/episodes/12953/the-wire-4x08-corner-boys",
      name: "Corner Boys",
      season: 4,
      number: 8,
      type: "regular",
      airdate: "2006-11-05",
      airtime: "21:00",
      airstamp: "2006-11-06T02:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236980.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236980.jpg",
      },
      summary:
        '<p>To monitor the pulse on the street, Carcetti makes the rounds with members of the force. While Proposition Joe shows off his vocal range, Chris shows Snoop how to expose, and dispose of, New York infiltrators. Colvin uses "corner" logic in class. A newly sober McNulty attends an Irish cop wake - with a not-so-sober Bunk. Michael is dismayed by the unexpected return of a missing family member.</p>',
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12953",
        },
      },
    },
    {
      id: 12954,
      url: "https://www.tvmaze.com/episodes/12954/the-wire-4x09-know-your-place",
      name: "Know Your Place",
      season: 4,
      number: 9,
      type: "regular",
      airdate: "2006-11-12",
      airtime: "21:00",
      airstamp: "2006-11-13T02:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236981.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236981.jpg",
      },
      summary:
        "<p>Poot returns to the corner after a stint in prison--and is welcomed back. Carcetti engages in a testy budget battle with City Council President Campbell, promotes Daniels, and hits a snag in his efforts to relieve Burrell of his duties.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12954",
        },
      },
    },
    {
      id: 12955,
      url: "https://www.tvmaze.com/episodes/12955/the-wire-4x10-misgivings",
      name: "Misgivings",
      season: 4,
      number: 10,
      type: "regular",
      airdate: "2006-11-19",
      airtime: "21:00",
      airstamp: "2006-11-20T02:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236982.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236982.jpg",
      },
      summary:
        "<p>Acting on Clay Davis' advice, Burrell seeks to burnish his reputation by ordering the department to double their street arrests. The mandate does not sit well with McNulty, who sets his sights instead on cracking a string of church robberies.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12955",
        },
      },
    },
    {
      id: 12956,
      url: "https://www.tvmaze.com/episodes/12956/the-wire-4x11-a-new-day",
      name: "A New Day",
      season: 4,
      number: 11,
      type: "regular",
      airdate: "2006-11-26",
      airtime: "21:00",
      airstamp: "2006-11-27T02:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236983.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236983.jpg",
      },
      summary:
        "<p>After flexing his muscles around the city, Carcetti faces his first dilemma when a group of ministers protests Herc's mistreatment of one of their own. Randy gets the cold shoulder at school. Omar and Reynaldo pay a menacing visit to Proposition Joe, with their own proposition. Freamon has a revelation at a crime scene that promises to blow the lid off an unsolved mystery.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12956",
        },
      },
    },
    {
      id: 12957,
      url: "https://www.tvmaze.com/episodes/12957/the-wire-4x12-thats-got-his-own",
      name: "That's Got His Own",
      season: 4,
      number: 12,
      type: "regular",
      airdate: "2006-12-03",
      airtime: "21:00",
      airstamp: "2006-12-04T02:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236984.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236984.jpg",
      },
      summary:
        "<p>On the trail of missing bodies, Freamon turns to a higher authority after being rebuked by Landsman. Carcetti finds his promises of prosperity undermined by the school debt, forcing him to contemplate groveling before the Governor in Annapolis.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12957",
        },
      },
    },
    {
      id: 12958,
      url: "https://www.tvmaze.com/episodes/12958/the-wire-4x13-final-grades",
      name: "Final Grades",
      season: 4,
      number: 13,
      type: "regular",
      airdate: "2006-12-10",
      airtime: "21:00",
      airstamp: "2006-12-11T02:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236985.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236985.jpg",
      },
      summary:
        "<p>In the Season Four finale, the bodies from the vacants pile up while Burrell offers his support to Daniels and admonishes Rawls for crossing him. A distraught Bubbles finds himself at his wit's end after his revenge plan backfires.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12958",
        },
      },
    },
    {
      id: 12959,
      url: "https://www.tvmaze.com/episodes/12959/the-wire-5x01-more-with-less",
      name: "More with Less",
      season: 5,
      number: 1,
      type: "regular",
      airdate: "2008-01-06",
      airtime: "21:00",
      airstamp: "2008-01-07T02:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236986.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236986.jpg",
      },
      summary:
        "<p>Season Five premiere. As McNulty and the detail continue staking out Marlo's crew, recently promoted Sergeant Carver is welcomed by a cauldron of discontent from officers coping with unpaid overtime.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12959",
        },
      },
    },
    {
      id: 12960,
      url: "https://www.tvmaze.com/episodes/12960/the-wire-5x02-unconfirmed-reports",
      name: "Unconfirmed Reports",
      season: 5,
      number: 2,
      type: "regular",
      airdate: "2008-01-13",
      airtime: "21:00",
      airstamp: "2008-01-14T02:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236987.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236987.jpg",
      },
      summary:
        "<p>Although he tells Sydnor the Davis investigation could be a 'career case,' Freamon keeps a wary eye out for Marlo, who takes care of some unfinished business and strikes a business deal with Barksdale.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12960",
        },
      },
    },
    {
      id: 12961,
      url: "https://www.tvmaze.com/episodes/12961/the-wire-5x03-not-for-attribution",
      name: "Not for Attribution",
      season: 5,
      number: 3,
      type: "regular",
      airdate: "2008-01-20",
      airtime: "21:00",
      airstamp: "2008-01-21T02:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236988.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236988.jpg",
      },
      summary:
        "<p>Carcetti's master plan for the police department is leaked to the press, sending the brass into a panic. Marlo turns to Proposition Joe to help with an enviable problem. Whiting and Klebanow drop a bombshell on the newspaper staff.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12961",
        },
      },
    },
    {
      id: 12962,
      url: "https://www.tvmaze.com/episodes/12962/the-wire-5x04-transitions",
      name: "Transitions",
      season: 5,
      number: 4,
      type: "regular",
      airdate: "2008-01-27",
      airtime: "21:00",
      airstamp: "2008-01-28T02:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236989.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236989.jpg",
      },
      summary:
        "<p>Campbell tries to smooth out the transitions in the police department. The newspaper scrambles to confirm surprising news from City Hall, but lose out to the TV media in scooping a high-profile Grand Jury appearance.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12962",
        },
      },
    },
    {
      id: 12963,
      url: "https://www.tvmaze.com/episodes/12963/the-wire-5x05-react-quotes",
      name: "React Quotes",
      season: 5,
      number: 5,
      type: "regular",
      airdate: "2008-02-03",
      airtime: "21:00",
      airstamp: "2008-02-04T02:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236990.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236990.jpg",
      },
      summary:
        "<p>Marlo forges an alliance with a drug connect, who shows him a new communications trick. McNulty's case gets increased attention from the newspaper, in large part thanks to the addition of Templeton to the reporting team.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12963",
        },
      },
    },
    {
      id: 12965,
      url: "https://www.tvmaze.com/episodes/12965/the-wire-5x06-the-dickensian-aspect",
      name: "The Dickensian Aspect",
      season: 5,
      number: 6,
      type: "regular",
      airdate: "2008-02-10",
      airtime: "21:00",
      airstamp: "2008-02-11T02:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236991.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236991.jpg",
      },
      summary:
        "<p>Mystified by Omar's disappearance, Marlo and Chris ramp up their efforts to locate their nemesis. After a sparsely attended waterfront ceremony, Carcetti fires away at a larger press event--and recasts himself as a champion for the homeless.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12965",
        },
      },
    },
    {
      id: 12966,
      url: "https://www.tvmaze.com/episodes/12966/the-wire-5x07-took",
      name: "Took",
      season: 5,
      number: 7,
      type: "regular",
      airdate: "2008-02-17",
      airtime: "21:00",
      airstamp: "2008-02-18T02:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236992.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236992.jpg",
      },
      summary:
        "<p>An unexpected call puts Templeton back in the spotlight--and gets McNulty more attention than he expected. Bunk bucks at Landsman when ordered to help with the force's most recent red ball.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12966",
        },
      },
    },
    {
      id: 12967,
      url: "https://www.tvmaze.com/episodes/12967/the-wire-5x08-clarifications",
      name: "Clarifications",
      season: 5,
      number: 8,
      type: "regular",
      airdate: "2008-02-24",
      airtime: "21:00",
      airstamp: "2008-02-25T02:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236993.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236993.jpg",
      },
      summary:
        "<p>Baltimore's renewed police commitment brings fresh recruits to Daniels and McNulty, starting with Carver. Facing a new political challenge, Carcetti is forced to make dangerous political deals.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12967",
        },
      },
    },
    {
      id: 12968,
      url: "https://www.tvmaze.com/episodes/12968/the-wire-5x09-late-editions",
      name: "Late Editions",
      season: 5,
      number: 9,
      type: "regular",
      airdate: "2008-03-02",
      airtime: "21:00",
      airstamp: "2008-03-03T02:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236994.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236994.jpg",
      },
      summary:
        "<p>With Steintorf ordering Rawls to initiate 'creative' remedies for the rising crime rate, Freamon's vigilance pays off with a promising lead, sending Sydnor and the department into overdrive.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12968",
        },
      },
    },
    {
      id: 12969,
      url: "https://www.tvmaze.com/episodes/12969/the-wire-5x10-30",
      name: "-30-",
      season: 5,
      number: 10,
      type: "regular",
      airdate: "2008-03-09",
      airtime: "21:00",
      airstamp: "2008-03-10T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/94/236995.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/94/236995.jpg",
      },
      summary:
        "<p>Carcetti maps out a damage-control scenario with the police brass in the wake of a startling revelation from Pearlman and Daniels. Their choice: clean up the mess...or hide the dirt.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/12969",
        },
      },
    },
  ];
}
