import React from "react";
import './SocialIcon.scss';

export default function SocialIcon({ Icon, alt }) {
  return (
    <div className="social-icon">
      <Icon aria-label={alt} />
    </div>
  );
}
