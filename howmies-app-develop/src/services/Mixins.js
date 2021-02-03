const Rules = {
  required: name => v => !!v || `${name} is required`,
  minLength: (name, minLength) => v => v.length >= minLength || `${name} must be at least ${minLength} characters`,
  maxlength: (name, maxlength) => v => (v && v.length < maxlength) || `${name} Can not be more than ${maxlength} characters`,
  email: v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,6})+$/.test(v) || 'E-mail must be valid',
};

const Misc = {
  isEmpty: (obj) => {
    if (obj) {
      if (Array.isArray(obj)) {
        return obj.length < 1;
      }
      return Object.keys(obj).length === 0;
    }
    return false;
  },
  fullname(user) {
    return user ? `${user.first_name} ${user.last_name}` : '';
  },
};

export { Rules, Misc };
