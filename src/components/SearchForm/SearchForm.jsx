import * as Yup from 'yup';
import Notiflix from 'notiflix';
import { Formik, ErrorMessage, Form } from 'formik';
import { Input, Button } from './SearchForm.styled';

const schema = Yup.object().shape({ search: Yup.string().required() });

const initialValues = {
  search: '',
};

export const SearchForm = ({ submitProp }) => {
  const handleSubmit = async (values, actions) => {
    if (values.search.trim() === '') {
      return Notiflix.Notify.failure('Tape your search query please');
    }
    await submitProp(values.search.toLowerCase());
    actions.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form>
          <Button type="submit" aria-label="Search">
            search
          </Button>

          <Input
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search monies"
          />
          <ErrorMessage name="search" component="div" />
        </Form>
      </Formik>
    </div>
  );
};
