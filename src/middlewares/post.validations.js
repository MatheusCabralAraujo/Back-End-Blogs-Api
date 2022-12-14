const validatePost = (title, content, categoryIds) => {
  if (!title) {
    const e = new Error('Some required fields are missing');
    e.name = 'ValidationError';
    throw e;
  }
  if (!content) {
    const e = new Error('Some required fields are missing');
    e.name = 'ValidationError';
    throw e;
  }
  if (!categoryIds) {
    const e = new Error('"categoryIds" not found');
    e.name = 'ValidationError';
    throw e;
  }
};

const verifyBeforeDestroy = (userId, postUserId) => {
  console.log('VALIDACAO MIDDLEWARE', 'USERID:', userId, 'POSTUSER:', postUserId);
  if (userId !== postUserId) {
    const e = new Error('Unauthorized user');
    e.name = 'Unauthorized';
    throw e;
  }
};

module.exports = {
  validatePost,
  verifyBeforeDestroy,
};