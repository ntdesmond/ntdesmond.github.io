import MailIcon from '../../../../components/icons/mail.svg';
import PrependIcon from './PrependIcon';

class EmailAddress {
  address: string;

  constructor(address: string) {
    if (!/.+@.+\..+/.test(address)) {
      throw new Error(`Invalid email address: ${address}`);
    }
    this.address = address;
  }

  toString(): string {
    return this.address;
  }
}

const EmailLink = (props: { address: string }) => {
  const validEmail = new EmailAddress(props.address).toString();

  return (
    <PrependIcon icon={MailIcon}>
      <a href={`mailto:${validEmail}`}>{validEmail}</a>
    </PrependIcon>
  );
};

export default EmailLink;
