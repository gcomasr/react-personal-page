import React from "react";

interface Props {
  footerText?: string;
}

function footerText({
  footerText = "Copyright © by Guillem Comas. All rights reserved.",
}: Props) {
  return <p>{footerText}</p>;
}

export default footerText;
