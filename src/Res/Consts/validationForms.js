import * as yup from 'yup';

const requiredMessage = 'The field is required';
const integerMessage = 'Enter a correct number';
const positiveMessage = 'Enter a positive number';
const correctLinkMessage = 'Enter a correct link';
const regExpHttps = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

const create_product = yup.object().shape({
  name: yup.string().required(requiredMessage),
  desc: yup.string().required(requiredMessage),
  imageUrl: yup.string().required(requiredMessage).matches(regExpHttps, correctLinkMessage),
  count: yup.number().required(requiredMessage).integer(integerMessage).moreThan(-1, positiveMessage).typeError(requiredMessage),
  weight: yup.number().required(requiredMessage).integer(integerMessage).positive(positiveMessage).typeError(requiredMessage),
  width: yup.number().required(requiredMessage).integer(integerMessage).positive(positiveMessage).typeError(requiredMessage),
});

const add_comment = yup.object().shape({
  description: yup.string().required(requiredMessage),
});

const validation = {
  create_product,
  add_comment,
};

export default validation;