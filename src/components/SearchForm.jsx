import * as Yup from 'yup';
import Notiflix from 'notiflix';
import { Formik, ErrorMessage, Form, Field } from 'formik';

const schema = Yup.object().shape({ search: Yup.string().required() });

const initialValues = {
  search: '',
};

export const SearchForm = ({ submitProp }) => {
  const handleSubmit = async (values, actions) => {
    if (values.search.trim() === '') {
      return Notiflix.Notify.failure('Tape your search query plese');
    }
    await submitProp(values);
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form>
          <button type="submit" aria-label="Search">
            search
          </button>

          <Field
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
