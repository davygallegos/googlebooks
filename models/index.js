module.exports = {
    Book: require("./book")
  };

  // Book routes
router.use("/books", bookRoutes);

module.exports = router;
