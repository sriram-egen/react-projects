import { useEffect, useState } from "react";
import Parser from "html-react-parser";

const docString =
  " \n \n \n \n                         NORTH AUSTIN MEDICAL CENTER\n             12221 North Mopac Expressway * Austin, Texas 78758\n   \n                                             \nPATIENT:        MALETT,JERIAN ANEL             MED RECORD #: H001817272\nACCOUNT#:       H82243589772                   ROOM #:       H.238-A            \nDATE OF BIRTH:  06/02/93                       LOCATION:     H.2N      \nSEX:            F                              PT STATUS:    DIS IN \nATTENDING PHYS: Anderson,Allison L  MD         ADM DATE:     08/09/23\nREPORT TYPE:    BIRTH CERTIFICATE INFANT       DIS DATE:     08/12/23\n \n \n===================================\nBirth Certificate\n===================================\nDatetime Report Generated by CPN: 08/13/2023 02:44\n   \n   \n===================================\n  MOTHER'S INFORMATION\n===================================\n   \nPatient Name:  MALETT, JERIAN ANEL\nPatient Address:  9239 AMBERGLEN BLVD\n   AUSTIN, TX   78729\nPatient Date of Birth:  6/2/1993\nPatient Age:  30\nPatient Race:  WHITE/CAUCASIAN\nPatient Marital Status:  Married\nAdoption:  No\n   \n===================================\nMATERNAL HEALTH INFORMATION\n===================================\n   \nWIC?:  No\nInfertility:  No\n   \n===================================\nMATERNAL PRENATAL/MEDICAL CARE\n===================================\n   \nPatient Physician:  Anderson, Allison L\nHeight (in):  64\nHeight (cm):  162.6\nPre-Pregnancy Weight (lb):  175\nPre-Pregnancy Weight (kg):  79.5\nWeight at Delivery (lb):  196\nWeight at Delivery (Kg):  89.1\nWeight Gain (lb):  21\nNumber of Babies in Womb:  1\nGravida:  2\n \n \nPATIENT: MALETT,JERIAN ANEL                 ACCOUNT #: H82243589772    \n \n \n \nPara:  1\nLiving:  1\nBlood Type:  O\nRh Type:  Positive\n   \n===================================\n  STDs\n===================================\n   \nHepatitis B:  Negative\n   \n===================================\nINFANT INFORMATION\n===================================\n   \nPhysician at Delivery:  Seeker, Christopher MD\nDelivery Date/Time Baby A:  08/10/2023 00:05\nGestational Age at Delivery:  37.0\nInfant Birthweight:  3050\nInfant Sex:  Male\n   \n===================================\nOB HISTORY\n===================================\n   \n   \n===================================\n PREGNANCY 1\n===================================\n   \nDOB/Loss:  7/29/2020\nFetus:  Singleton\nGestational Age:  Term, >37 weeks\nInfant Sex:  Female\nEarly Loss:  Spontaneous\nCondition:  Living\n   \n===================================\n PREGNANCY 2\n===================================\n   \nDOB/Loss:  Current \n   \n===================================\n PREGNANCY 3\n===================================\n   \n   \n===================================\n PREGNANCY 4\n===================================\n   \n   \n===================================\n \n \nPATIENT: MALETT,JERIAN ANEL                 ACCOUNT #: H82243589772    \n \n \n \n PREGNANCY 5\n===================================\n   \n   \n===================================\n PREGANACY 6\n===================================\n   \n   \n===================================\nPREGNANCY 7\n===================================\n   \n     \nDocumented User Ids: <AUTO> QS, system, process, {<AUTO> QS, system,\n   process}, {NHE6226 Vera, Jaimes, Jocelyn}, {IQC5371 Orgia, Whitfield}\n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \nPATIENT: MALETT,JERIAN ANEL                 ACCOUNT #: H82243589772    ";

function SearchString() {
  const [docContent, setDocContent] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const lines = replaceSpacesWithNbsp(docString.replace(/\n+/g, "<br>"));

    setDocContent(lines);
  }, []);

  function replaceSpacesWithNbsp(str) {
    return str.replace(/\s/g, "&nbsp;");
  }

  // Function to replace a string with styled element based on search term
  const replaceStringWithStyling = (input, searchText) => {
    // Validate input types
    if (typeof input !== "string" || typeof searchText !== "string") {
      throw new Error("Invalid input types. All parameters must be strings.");
    }

    // Convert both input and search text to lowercase for case-insensitive matching
    const lowerInput = input.toLowerCase();
    const lowerSearchText = searchText.toLowerCase();

    // Find the first occurrence of the search term (case-insensitive)
    const startIndex = lowerInput.indexOf(lowerSearchText);

    // If search term not found, return original input
    if (startIndex === -1) {
      return input;
    }

    // Calculate the end index based on start index and search term length
    const endIndex = startIndex + lowerSearchText.length;

    // Construct the styled string:
    // - Slice original input from beginning to start index
    // - Wrap the matched search term in a <mark> element
    // - Slice original input from end index to the end
    const styledString =
      input.slice(0, startIndex) +
      `<mark>${input.slice(startIndex, endIndex)}</mark>` +
      input.slice(endIndex);

    return styledString;
  };

  // Function to handle search input in the React component
  const handleSearch = (e) => {
    setSearch(e.target.value); // Update search state with user input

    // Split document content into lines using newline character
    const lines = docString.split("\n");

    // Process each line to highlight search term
    const highlightedLines = lines.map((line) => {
      // Split the line into words using '&nbsp;' as separator
      const words = line.split("&nbsp;");

      // Map over each word to highlight search term within it
      const highlightedWords = words.map((word) => {
        // Apply replaceStringWithStyling to highlight search term in the word
        const highlightedWord = replaceStringWithStyling(word, e.target.value);
        return highlightedWord;
      });

      // Join back the highlighted words with '&nbsp;'
      return highlightedWords.join("&nbsp;");
    });

    // Join the highlighted lines back with newline character
    const highlightedContent = highlightedLines.join("<br>");

    // Update docContent state with the highlighted content
    setDocContent(highlightedContent);
  };

  return (
    <div>
      <div>
        <input placeholder="Search..." type="text" onChange={handleSearch} />
        search - {search}
      </div>
      {Parser(`<pre><code>${docContent}</code></pre>`, {})}
    </div>
  );
}

export default SearchString;
